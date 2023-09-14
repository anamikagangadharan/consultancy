import React from 'react'
import css from "./Mobileapp.module.css"

import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg" 

import D1 from "../../assets/mobileapp/md1.svg"
import D2 from "../../assets/mobileapp/md2.svg"
import D3 from "../../assets/mobileapp/md3.svg"
import D4 from "../../assets/mobileapp/md4.svg"
import D5 from "../../assets/mobileapp/md5.svg"
import D6 from "../../assets/mobileapp/md6.svg"
import D7 from "../../assets/mobileapp/md7.svg"

import Set1 from "../../assets/mobileapp/mset1.svg"
import Set2 from "../../assets/mobileapp/mset2.svg"
import Set3 from "../../assets/mobileapp/mset3.svg"

import Set4new from "../../assets/mobileapp/msetnew4.svg"
import { HashLink } from 'react-router-hash-link'


const Mobileapp = () => {
  return (
    <div className={css.container} id='mob'>
    <div className={css.container1}>
      <div className={css.wrap1}>

          <div className={css.div1}>
              <span>Mobile App Development</span>
             <span>In today's fast-paced technological landscape, businesses need more than just software; they need strategic IT solutions that empower growth and ensure seamless operations.</span>
             <HashLink to="/contact/#contactform">  <button className={css.startbtn}>Start Project</button> </HashLink>
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
                      <span>Strategy</span>
                    <span>We start with success: Crafting strategies, not just apps. Our experts define objectives, audiences, and features for a purposeful, goal-aligned app. </span>
                  </div>
                  <div className={css.box}>
                      <img src={D2} alt="" />
                      <span>User Experience Design</span>
                    <span>Visionary user-centric design. Our team creates captivating, intuitive interfaces that leave lasting impressions and drive user engagement.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D3} alt="" />
                      <span>Prototyping Wireframes</span>
                   <span>Concepts brought to life: We create prototypes and wireframes to visualize app flow, ensuring the right direction before development.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D4} alt="" />
                      <span>Design & Development</span>
                    <span>Our design and development team transforms your vision into a polished mobile app, leveraging the latest tech and coding practices for excellence and innovation.</span>
                  </div>

                  </div>


                  <div className={css.div2contentbottom}>
                    
                  <div className={css.box2}>
                      <img src={D5} alt="" />
                      <span>Testing</span>
                      <span>We prioritize quality and performance through rigorous testing, ensuring your app performs flawlessly across devices for an exceptional user experience.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D6} alt="" />
                      <span>Launch</span>
                    <span>We handle the launch, ensuring a seamless transition to app stores with optimization for enhanced discoverability, setting your app up for success.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D7} alt="" />
                      <span>Support & Maintenance</span>
                  <span>Beyond launch, we're your ongoing support, ensuring your app stays updated, secure, and performs at its best, with your long-term success as our goal.</span>
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
                          <div className={css.oddset} id='aad'
                          
                           >
                              <div className={css.oddsetcontent}
                             
                            
                               >
                                  <span>1. Android App Development</span>
                                  <span>Our Android app development team specializes in creating high-quality, user-friendly applications that leverage the full potential of the Android platform. From concept to launch, we ensure your app stands out on the Google Play Store, providing a seamless experience for Android users.</span>
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
                          <div className={css.evenset} id='ios'>
                              <div className={css.evensetimage}>
                                  <img src={Set2} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>2. iOS App Development</span>
                                   <span>For iOS enthusiasts, our iOS app development experts craft elegant, intuitive applications that cater to the discerning Apple user. We bring your app ideas to life, embracing the latest iOS technologies and design principles to deliver a remarkable user experience on iPhones and iPads.</span>
                              </div>
                          </div>
                          {/* evenset */}

                           {/* oddset */}
                           <div className={css.oddset} id='cmas'>
                              <div className={css.oddsetcontent}>
                                 <span>3. Custom Mobile App Services</span>
                                 <span>Sometimes, unique challenges call for custom solutions. Our custom mobile app development services are tailored to address your specific requirements. Whether it's a cross-platform app, a specialized business tool, or a niche consumer app, we have the expertise to bring your vision to reality.</span>
                              </div>
                              <div className={css.oddsetimage}>
                                  <img src={Set3} alt="" /> 

                              </div>
                          </div>
                          {/* oddset */}


                      </div>

                      <div className={css.newdiv}>
                        <div className={css.new1}>
                            <span>Why Choose Invicious for Mobile Application Development</span>
                        </div>

                        <div className={css.new2}>
                            <div className={css.new2left}>
                                <span> <span className={css.inv}>At Invicious,</span> our creative team is your strategic partner in the digital realm. With expertise in UI/UX design, IT consultancy, web development, mobile app development, and digital branding, we fuse innovation and technology to elevate your digital presence.</span>
                                <span>Whether it's crafting intuitive user experiences, offering expert IT guidance, or building cutting-edge web and mobile solutions, we are your compass in the ever-evolving digital landscape.</span>
                            </div>
                            <div className={css.new2right}>
                                <img src={Set4new} alt="" />
                            </div>
                        </div>
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

export default Mobileapp
