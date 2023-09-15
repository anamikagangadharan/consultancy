import React from 'react'
import css from "./Footer.module.css"

import Logo from "../../assets/consultancy-logo.svg"
// import Insta from "../../assets/insta.svg"
// import Twitter from "../../assets/twitter.svg"
import Chat from "../../assets/chat.svg"
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
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
              <a href="https://www.instagram.com/invicious.in/" target='blank'> <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 34424">
<path id="Vector" d="M12.4851 7.9983C10.2816 7.9983 8.48343 9.79651 8.48343 12C8.48343 14.2035 10.2816 16.0017 12.4851 16.0017C14.6885 16.0017 16.4867 14.2035 16.4867 12C16.4867 9.79651 14.6885 7.9983 12.4851 7.9983ZM24.4869 12C24.4869 10.3429 24.502 8.70077 24.4089 7.04665C24.3158 5.12536 23.8775 3.4202 22.4726 2.01525C21.0647 0.607302 19.3626 0.172008 17.4413 0.0789456C15.7842 -0.0141173 14.1421 0.000892936 12.4881 0.000892936C10.831 0.000892936 9.18889 -0.0141173 7.5348 0.0789456C5.61354 0.172008 3.90842 0.610305 2.5035 2.01525C1.09557 3.42321 0.660287 5.12536 0.567225 7.04665C0.474164 8.70377 0.489174 10.3459 0.489174 12C0.489174 13.6541 0.474164 15.2992 0.567225 16.9533C0.660287 18.8746 1.09857 20.5798 2.5035 21.9847C3.91142 23.3927 5.61354 23.828 7.5348 23.9211C9.19189 24.0141 10.834 23.9991 12.4881 23.9991C14.1451 23.9991 15.7872 24.0141 17.4413 23.9211C19.3626 23.828 21.0677 23.3897 22.4726 21.9847C23.8805 20.5768 24.3158 18.8746 24.4089 16.9533C24.505 15.2992 24.4869 13.6571 24.4869 12ZM12.4851 18.1572C9.07782 18.1572 6.32801 15.4073 6.32801 12C6.32801 8.5927 9.07782 5.84284 12.4851 5.84284C15.8923 5.84284 18.6421 8.5927 18.6421 12C18.6421 15.4073 15.8923 18.1572 12.4851 18.1572ZM18.8943 7.02864C18.0987 7.02864 17.4563 6.38621 17.4563 5.59067C17.4563 4.79513 18.0987 4.1527 18.8943 4.1527C19.6898 4.1527 20.3322 4.79513 20.3322 5.59067C20.3325 5.77957 20.2954 5.96667 20.2232 6.14124C20.1511 6.31581 20.0451 6.47442 19.9116 6.608C19.778 6.74157 19.6194 6.84748 19.4448 6.91967C19.2703 6.99185 19.0832 7.02888 18.8943 7.02864Z" fill="#666666"/>
</g>
</svg>
 </a> 
              <a href="https://twitter.com/invcs_in" target='blank'>  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Layer_1" clip-path="url(#clip0_1145_6016)">
<path id="Vector" d="M14.8363 10.1623L23.4921 0H21.4411L13.9265 8.82383L7.92381 0H1L10.0769 13.3431L1 24H3.05106L10.9874 14.6818L17.3265 24H24.2497L14.8363 10.1623ZM12.0275 13.4607L11.1077 12.1325L3.7901 1.55953H6.94059L12.846 10.0918L13.7656 11.4207L21.442 22.5114H18.2915L12.0275 13.4623V13.4607Z" fill="#666666"/>
</g>
<defs>
<clipPath id="clip0_1145_6016">
<rect width="24" height="24" fill="white" transform="translate(0.488281)"/>
</clipPath>
</defs>
</svg>
 </a> 

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
               {mobile?   <div className={css.mobline}></div>     :""}     
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
                    <span>+91 8877880101</span>
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
                <span>Copyright © 2023 Invicious Consltancy Services | {mobile? <br></br> :""} All Rights Reserved. </span>
            </div>
        </div>
        </div>
      
    </div>
  )  
}

export default Footer
 