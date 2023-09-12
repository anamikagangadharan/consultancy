import React from 'react'
import css from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={css.container}>
        <div className={css.container1}>
        <div className={css.wrap1}>
       
                <span>Contact Us</span>
                <span>Invicious Consultancy Services, your gateway to seamless technology solutions and expert IT guidance. Unlock the power of innovation and achieve business excellence with our dedicated team of professionals."</span>
                <button className={css.startbtn}>Start Project</button>
         

        </div>
        </div>

        <div className={css.container2}>
            <div className={css.heading}>
                <span>Contact Us</span>
            </div>
            <div className={css.wrap2}>
                <div className={css.wrap2left}>
                    <span> <span className={css.inv}>At Invicious, </span> our creative team is your strategic partner in the digital realm. With expertise in UI/UX design, IT consultancy, web development, mobile app development, and digital branding, we fuse innovation and technology to elevate your digital presence.</span>
                     <span>Whether it's crafting intuitive user experiences, offering expert IT guidance, or building cutting-edge web and mobile solutions, we are your compass in the ever-evolving digital landscape.</span>
                </div>

                {/* form */}
                <form className={css.wrap2right}  > 
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Full name *</label>
            <input   className={css.contactinp}  required type="text" name="to_name" id=""  placeholder='Enter Your Name'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Your Email *</label>
            <input className={css.contactinp}  required  type="email" name="to_email" id="" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Phone number *</label>
            <input   className={css.contactinp}  required type="number" name="number" id=""  placeholder='Enter Your Number'/>
            </div>
            <div className={css.line}>
            <label  htmlFor="">Company *</label>
            <input   className={css.contactinp}  required type="text" name="company" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label for="cars">Subject *</label>

            <select className={css.selectinput} name="subject" id="cars">
  <option className={css.opt} value="Nil">How Can We Help ?</option>
  <option className={css.opt} value="Consultancy service">IT Consultancy Service</option>
  <option className={css.opt} value="Web Design & Development">Web Design & Development</option>
  <option className={css.opt} value="Mobile App Development">Mobile App Development</option>
  <option className={css.opt} value="digital Branding Services">Digital Branding Services</option>
  <option className={css.opt} value="Software Development">Software Development</option>

</select>
          
            </div>
            <div className={css.line}>
            <label htmlFor="">Country *</label>
            <input   className={css.contactinp}  required type="text" name="country" id=""  placeholder='Enter Your Country'/>
            </div>
        </div>

        <div className={css.lastset}>
            <label htmlFor="">Message</label>
           
          <input className={css.messageinp} type="text" name='message' placeholder='Enter some message here'/>
        </div>
        <button  className={css.subbtn}>Submit</button>

      </form>

                {/* form end */}

            </div> 
        </div>
    </div>
  )
} 

export default Contact
