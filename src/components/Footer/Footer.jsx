import React from 'react'
import css from "./Footer.module.css"

import Logo from "../../assets/consultancy-logo.svg"
import Insta from "../../assets/insta.svg"
import Twitter from "../../assets/twitter.svg"
import Chat from "../../assets/chat.svg"
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
  return (
    <div  className={css.container}>
        <div className={css.wrap}>

            <div className={css.contain1}> 

            
            <div className={css.left}>
                <div className={css.leftcontent}>  
               
               <div className={css.left1}>
                <img src={Logo} alt="" />
               </div>

               <div className={css.left2}>
                <span>Transforming Technology,<br />
Empowering Success.</span>
<div className={css.left3icons}>
              <a href="https://www.instagram.com/invicious.in/" target='blank'>  <img src={Insta} alt="" /> </a> 
              <a href="https://twitter.com/invcs_in" target='blank'>  <img src={Twitter} alt="" /></a> 

               </div>
               </div>

             

            </div>
           

            <div className={css.hzline}></div>

            </div>


            <div className={css.middle}>
                <div className={css.middle1}> 
                <span>Our Services</span>
                </div>

                <div className={css.line1}></div>

                <div className={css.lists}>
                    <div className={css.listleft}>
                    <HashLink to="/itcs/#itcs">    <span>IT Consulting & Services</span> </HashLink> 
                        <HashLink to="swd/#swd">       <span>Software Development</span> </HashLink> 
                        <HashLink to="/mob/#mob">  <span>Mobile App Development</span> </HashLink> 
                        <HashLink to='/webd/#webd' >         <span>Web Development</span> </HashLink> 
                    </div>
                    <div className={css.listright}>
                    <HashLink to="/db/#db" >      <span>Digital Branding</span> </HashLink> 
                    <HashLink to="/uiux/#uiux">      <span>UI/UX Design Service</span> </HashLink> 
                        {/* <span>Application Services</span> */}
                    </div>
                </div>

            </div>





            <div className={css.right}>
            <div className={css.right1}> 
                <span>Contact</span>
                </div>

                <div className={css.line1}></div>

                <div className={css.right2}>
                    <span>+91 88778 80101</span>
                   <a href="mailto: connect@invicious.in"> <span>contact@invicious.in</span> </a> 
                    <span>124-H, 3rd Floor, Thendral Complex,<br /> DB Road, RS Puram,  <br />Coimbatore - 641002</span>
                </div>
            </div>

            <div className={css.last}> 
            <img src={Chat} alt="" />
            </div>


        </div>

        <div className={css.contain2}>
            <div className={css.lineb}></div>
            <div className={css.copyright}>
                <span>Copyright © 2023 Invicious Consltancy Services | All Rights Reserved. </span>
            </div>
        </div>
        </div>
      
    </div>
  )  
}

export default Footer
 