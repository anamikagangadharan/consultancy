//import React from 'react'
// import React, { useRef, useState, useEffect } from 'react';

import React, { useRef, useState } from 'react';
import countriesData from '../countries.json'; // Go up one level from Contact folder
import css from "./Contact.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link'




const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: '',
    to_email: '',
    number: '',
    company: '',
    subject: 'How Can We Help ?',
    country: '',
    message: '',
  });
  

  // const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const notify = () => toast.success('Sent Successfully');
  const form = useRef();


  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.eu/rest/v2/all')
  //     .then((response) => {
  //       console.log('Fetched countries:', response.data);
  //       setCountries(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching countries:', error);
  //     });
  // }, []);
  


  const handleCountryInputChange = (e) => {
    const inputValue = e.target.value;
    setFormData({ ...formData, country: inputValue });
    // Filter countries based on the input
    const filtered = countriesData.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  };






  const sendEmail = (e) => {
    e.preventDefault();

    axios
      // .post('http://localhost:3000/contact', formData) // Use Axios for the POST request
      .post('http://34.100.169.160/contact', formData) // Use Axios for the POST request
      .then((response) => {
        console.log(response.data);

        // Clear the form after successful submission
        setFormData({
          to_name: '',
          to_email: '',
          number: '',
          company: '',
          subject: 'How Can We Help ?',
          country: '',
          message: '',
        });

        // Show toast notification
        notify();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className={css.container} id='contact'>
        <div className={css.container1}>
        <div className={css.wrap1}>
       
                <span>Contact Us</span>
                <span>Invicious Consultancy Services, your gateway to seamless technology solutions and expert IT guidance. Unlock the power of innovation and achieve business excellence with our dedicated team of professionals."</span>
                <HashLink to="/contact/#contactform" smooth={true}>  <button className={css.startbtn}>Start Project</button> </HashLink>
         

        </div>
        </div>

        <div className={css.container2} id='contactform'>
            <div className={css.heading}>
                <span>Contact Us</span>
            </div>
            <div className={css.wrap2}>
                <div className={css.wrap2left}>
                    <span> <span className={css.inv}>At Invicious, </span> our creative team is your strategic partner in the digital realm. With expertise in UI/UX design, IT consultancy, web development, mobile app development, and digital branding, we fuse innovation and technology to elevate your digital presence.</span>
                     <span>Whether it's crafting intuitive user experiences, offering expert IT guidance, or building cutting-edge web and mobile solutions, we are your compass in the ever-evolving digital landscape.</span>
                </div>

                {/* form */}
                <form className={css.wrap2right} onSubmit={sendEmail} > 
                 <div className={css.set}>
                  <div className={css.line}>
            <label htmlFor='to_name'>Full name *</label>
            <input
              onChange={handleChange}
              className={css.contactinp}
              required
              type='text'
              name='to_name'
              id='to_name'
              value={formData.to_name}
              placeholder='Enter Your Name'
            />
            </div>
            <div className={css.line}>
            <label htmlFor='to_email'>Your Email *</label>
            <input
              onChange={handleChange}
              className={css.contactinp}
              required
              type='email'
              name='to_email'
              id='to_email'
              value={formData.to_email}
              placeholder='Enter Your Email'
            />





    
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
          <label htmlFor='number'>Phone number *</label>
            <input
              onChange={handleChange}
              className={css.contactinp}
              required
              type='number'
              name='number'
              id='number'
              value={formData.number}
              placeholder='Enter Your Number'
            />

            </div>
            <div className={css.line}>
            <label htmlFor='company'>Company *</label>
            <input
              onChange={handleChange}
              className={css.contactinp}
              required
              type='text'
              name='company'
              id='company'
              value={formData.company}
              placeholder='Enter Your Company name'
            />










            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor='subject'>Subject *</label>

            <select
              onChange={handleChange}
              className={css.selectinput}
              name='subject'
              id='subject'
              value={formData.subject}
            >

  <option className={css.opt} value="Nil">How Can We Help ?</option>
  <option className={css.opt} value="Consultancy service">IT Consultancy Service</option>
  <option className={css.opt} value="Web Design & Development">Web Design & Development</option>
  <option className={css.opt} value="Mobile App Development">Mobile App Development</option>
  <option className={css.opt} value="digital Branding Services">Digital Branding Services</option>
  <option className={css.opt} value="Software Development">Software Development</option>
  <option className={css.opt} value="Career">Career</option>
  <option className={css.opt} value="Something else">Something else</option>

</select>
          
            
           
        </div>

        <div className={css.line}>
            <label htmlFor='country'>Country *</label>
            {/* <input */}
            <select
              onChange={handleChange}
              className={css.contactinp}
              required
              // type='text'
              name='country'
              id='country'
              value={formData.country}
              // placeholder='Enter Your Country'
            //>


            >
            <option value='' disabled>
              Select your country
            </option>
            {/* {countries.map((country) => ( */}
            {countriesData.map((country) => (
              // <option key={country.alpha2Code} value={country.name}>
              <option key={country.code} value={country.name}>

                {country.name}
              </option>
            ))}
          </select>

          </div>
          <ul>  {filteredCountries.map((country) => (
                  <li
                    key={country.code}
                    onClick={() => {
                      setFormData({ ...formData, country: country.name });
                      setFilteredCountries([]); // Clear suggestions
                    }}
                  >
                    {country.name}
                  </li>
                ))}
          </ul>
        </div>

        <div className={css.lastset}>
        <label htmlFor='message'>Message</label>
           
          <input 
          onChange={handleChange}
          className={css.messageinp} 
          type="text" 
          name='message' 
          placeholder='Enter some message here'
          />
        </div>
        <button type='submit'  className={css.subbtn}>
           Submit
        </button>

        {formData.to_name.length > 1 &&
        formData.to_email.length > 1 &&
        formData.company.length > 1 &&
        formData.number.length > 5 &&
        formData.country.length > 1 ? (
          <ToastContainer style={{ width: '257px', height: '50px' }} autoClose={600} position={'bottom-center'} />
        ) : (
          ''
        )}

      </form>

                {/* form end */}

            </div> 
        </div>
    </div>
  )
} 

export default Contact
