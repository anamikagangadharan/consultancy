const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path'); // Import the 'path' module
const axios = require('axios'); // Import axios
const app = express();
const port = process.env.PORT || 3000;
const twilio = require('twilio');


mongoose.connect('mongodb+srv://admin:anamika_1234@cluster0.lvywqj9.mongodb.net/invicious?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});


// Define a schema for email subscriptions
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
});


// Create a model for email subscriptions
const Subscription = mongoose.model('Subscription', subscriptionSchema);


// Initialize twilio
const twilioClient = twilio('AC8cdf39bfab67cb47dcd9b726c58e7428', 'e14d041bb1f447f499585552cf3bbba1');  //for twilio purpose

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  // Serve your React application's index.html here
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Endpoint to handle email subscriptions
app.post('/Subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: 'Email subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing email:', error);
    res.status(500).json({ message: 'Failed to subscribe email' }); // Return a proper HTTP response
  }
});




// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const {
    to_name,
    to_email,
    number,
    company,
    subject,
    country,
    message,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'anamikadevi.g@invicious.in',
      pass: 'nkosamgzeixqzjog',  //created from app pwd
    },
  });

  



  const mailOptions = {
    from: to_email, // Use the sender's email from the form data
    to: 'anamikadevi.g@invicious.in', // Replace with the recipient email address
    subject: 'ANU',
    text: `
      Hello BATCAVE,
  
      You got a new message from "${to_email}"
  
      Name - "${to_name}"
      Phone Number - "${number}"
      Company - "${company}"
      Subject - "${subject}"
      Country - "${country}"
  
      Message:
      ${message}
  
      Regards,
      ${to_name}
    `,
  };
  
  

  try {
    await transporter.sendMail(mailOptions);



     // Send SMS using Twilio
     await twilioClient.messages.create({
      body: 'Hello batcave.',                                //for twilio purpose 
      from: '+12402417770',
      to:'+918925145146', 
    });



    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    // console.error('Error sending email:', error);
    console.error('Error sending email and SMS:', error);                 // twilio purpose 
    // res.status(500).json({ message: 'Failed to send message' });
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
});








// app.post('/chat', async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const chatbotResponse = await ChatBot.processMessage(userMessage); // Use your chatbot logic here

//     res.status(200).json({ response: chatbotResponse });
//   } catch (error) {
//     console.error('Error processing chat message:', error);
//     res.status(500).json({ response: 'Failed to process chat message' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

