import React from 'react'
import css from "./Footer.module.css"

import Logo from "../../assets/consultancy-logo.svg"
import Insta from "../../assets/insta.svg"
import Twitter from "../../assets/twitter.svg"
import Chat from "../../assets/chat.svg"

const Footer = () => {
  return (
    <div  className={css.container}>
        <div className={css.wrap}>

            
            <div className={css.left}>
                <div className={css.leftcontent}>  
               
               <div className={css.left1}>
                <img src={Logo} alt="" />
               </div>

               <div className={css.left2}>
                <span>Transforming Technology,<br />
Empowering Success.</span>
<div className={css.left3icons}>
                <img src={Insta} alt="" />
                <img src={Twitter} alt="" />

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
                        <span>IT Consulting & Services</span>
                        <span>IT Consulting & Services</span>
                        <span>IT Consulting & Services</span>
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.listright}>
                        <span>UI/UX Design Service</span>
                        <span>UI/UX Design Service</span>
                        <span>UI/UX Design Service</span>
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
                    <span>contact@invicious.in</span>
                    <span>124-H, 3rd Floor, Thendral Complex,<br /> DB Road, RS Puram,  <br />Coimbatore - 641002</span>
                </div>
            </div>

            <div className={css.last}> 
            <img src={Chat} alt="" />
            </div>


        </div>
      
    </div>
  )  
}

export default Footer
 