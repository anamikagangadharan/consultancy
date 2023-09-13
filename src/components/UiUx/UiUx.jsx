import React from 'react'
import css from "./UiUx.module.css"

import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg"

import D1 from "../../assets/uiux/uid1.svg"
import D2 from "../../assets/uiux/uid2.svg"
import D3 from "../../assets/uiux/uid3.svg"
import D4 from "../../assets/uiux/uid4.svg"
import D5 from "../../assets/uiux/uid5.svg"
import D6 from "../../assets/uiux/uid6.svg"
import D7 from "../../assets/uiux/uid7.svg"

import Set1 from "../../assets/uiux/uiset1.svg"
import Set2 from "../../assets/uiux/uiset2.svg"
import Set3 from "../../assets/uiux/uiset3.svg"
import Set4 from "../../assets/uiux/uiset4.svg"
import Set5 from "../../assets/uiux/uiset5.svg"
import Set6 from "../../assets/uiux/uiset6.svg"

const UiUx = () => {
  return (
    <div className={css.container}>
      <div className={css.container1}>
        <div className={css.wrap1}>

            <div className={css.div1}>
                <span>Elevate Your Brand with Seamless UI/UX Excellence</span>
               <span>Our skilled UI/UX team crafts modern solutions for Web, Desktop, iOS, and Android. We excel in interactive prototypes, stunning interfaces, and top-notch UX. Trust Invicious Consultancy for a delightful brand experience!</span>
                <button className={css.startbtn}>Start Project</button>
            </div>

            </div>

            </div> 

<div className={css.container2}> 

<div className={css.wrap2}>


            <div className={css.div2}>
                <div className={css.div2head}>
                    <span>Transforming Ideas into Intuitive Experiences</span>
                </div>

                <div className={css.div2contents}>
                    <div className={css.div2contentstop}>
                    <div className={css.box}>
                        <img src={D1} alt="" />
                        <span>User Centered Design</span>
                      <span> Craft intuitive interfaces that speak to your audience, putting their needs and desires at the forefront.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Multi-Platform Expertise</span>
                      <span>Seamlessly extend your brand's reach with designs optimized for Web, Desktop, iOS, and Android.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D3} alt="" />
                        <span> Interactive Prototypes</span>
                     <span>Get a taste of the future with interactive prototypes that garner early user feedback and refine your vision.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Collaborative Excellence</span>
                      <span>Our expert UI/UX team collaborates with you throughout the process, ensuring your vision becomes a reality.</span>
                    </div>

                    </div>


                    <div className={css.div2contentbottom}>
                      
                    <div className={css.box2}>
                        <img src={D5} alt="" />
                        <span>Visually Stunning UI</span>
                        <span>Elevate your brand with visually appealing and consistent user interfaces that leave a lasting impression.</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D6} alt="" />
                        <span>Implementing UX Techniques</span>
                      <span>Infuse best practices into your digital products, enhancing usability, accessibility, and overall user satisfaction.</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D7} alt="" />
                        <span>Delivering Delightful Experiences</span>
                    <span>At Invicious, we're dedicated to delivering experiences that set you apart and keep users coming back.</span>
                    </div>

                    </div>

                   
                   
                    

                </div>
            </div>
           

            </div>
            </div>

            <div className={css.container3}>
                <div className={css.wrap3}>


                    <div className={css.div3}>
                        <div className={css.div3head}>
                           <span>The Best Solutions For Business</span>
                           <span>Software Development</span>
                        </div>

                        <div className={css.div3content}>

                         {/* oddset */}
                            <div className={css.oddset} id='csd'
                            
                             >
                                <div className={css.oddsetcontent}
                               
                              
                                 >
                                    <span>1. Website Design</span>
                                    <span>Designing websites with a touch of UX/UI magic! Our team crafts visually stunning, user-centric websites that captivate audiences and deliver seamless digital experiences. Let us transform your online presence into a compelling, user-friendly journey.</span>
                                </div>
                                <div className={css.oddsetimage}
                                    initial={{ x: "15rem" }}
                                    whileInView={{ x: "0rem" }}
                                   
                                    transition={{ duration: 1 }}
                                    
                                >
                                    <img src={Set1} alt="" />

                                </div>
                            </div>
                            {/* oddset */}


                          {/* evenset */}
                            <div className={css.evenset} id='spd'>
                                <div className={css.evensetimage}>
                                    <img src={Set2} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>2. Mobile App Designt</span>
                                     <span>Elevating mobile experiences through UI/UX excellence! We specialize in crafting intuitive and visually appealing mobile apps that engage users and streamline interactions. Trust us to turn your app idea into a delightful, user-friendly reality</span>
                                     <span className={css.packagespan}>Our Ultimate Package</span>
                                    <span className={css.durationspan}>Duration - 15-30 days <br />Quantity - Depends on the screen after research</span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='ssm'>
                                <div className={css.oddsetcontent}>
                                   <span>3. Web App Design</span>
                                   <span>Transforming ideas into web app wonders! Our UI/UX experts create web applications that blend aesthetics with functionality for an outstanding user experience. Let us design your digital solution with precision and elegance.</span>
                                   <span className={css.packagespan}>Our Ultimate Package</span>
                                    <span className={css.durationspan}>Duration - 2 Weeks <br />Quantity - Depending on the application</span>
                                </div>
                                <div className={css.oddsetimage}>
                                    <img src={Set3} alt="" /> 

                                </div>
                            </div>
                            {/* oddset */}


                              {/* evenset */}
                              <div className={css.evenset} id='sos'>
                                <div className={css.evensetimage}>
                                    <img src={Set4} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>4. Redesigning</span>
                                    <span>Breathe new life into your digital presence with our UI/UX redesign expertise. We'll revamp your website or app, enhancing user-friendliness, aesthetics, and functionality. Elevate your brand and stay ahead of the competition with our redesign solutions.</span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='ssm'>
                                <div className={css.oddsetcontent}>
                                   <span>5. MVP (Minimum Viable Product)</span>
                                   <span>Launch your product idea quickly and efficiently with our MVP (Minimum Viable Product) UI/UX design. We'll help you create a streamlined and user-focused prototype that captures the essence of your concept, allowing for rapid testing and validation. Get ready to make your mark in the market with our MVP design expertise.</span>
                                   <span className={css.packagespan}>Our Ultimate Package</span>
                                    <span className={css.durationspan}>Duration - 5 Weeks <br />Quantity - Depending on the application</span>
                                </div>
                                <div className={css.oddsetimage}>
                                    <img src={Set5} alt="" /> 

                                </div>
                            </div>
                            {/* oddset */}


                              {/* evenset */}
                              <div className={css.evenset} id='sos'>
                                <div className={css.evensetimage}>
                                    <img src={Set6} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>6. Website Animation / Motion Graphics</span>
                                    <span>Add a touch of magic to your web presence with our website animation and motion graphics expertise in UI/UX design. Our creative team brings your website to life with captivating animations and dynamic visuals that enhance user engagement and leave a lasting impression. Elevate your online experience with our mesmerizing designs.</span>
                                    <span className={css.packagespan}>Our Ultimate Package</span>
                                    <span className={css.durationspan}>Duration - Depends <br />Quantity - Depends</span>
                                </div>
                            </div>
                            {/* evenset */}



                        </div>


                        <div className={css.div4}>
            <div className={css.d4left}>
               <span>Teamwork for success!</span>
               <span>Hire the best developers and designers around!</span>

            </div>


            <div className={css.d4right}>
                <img  src={Top} alt="" />
                <button className={css.hirebtn}>Hire Top Developers</button>
                <img src={Bottom} alt="" />
            </div>

        </div>
                    </div>


                </div>
            </div>
      
    </div>
  )
}

export default UiUx
