import React from 'react'
import css from "./Webdevelopment.module.css"

import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg"

import D1 from "../../assets/webdevelopment/wd1.svg"
import D2 from "../../assets/webdevelopment/wd2.svg"
import D3 from "../../assets/webdevelopment/wd3.svg"
import D4 from "../../assets/webdevelopment/wd4.svg"
import D5 from "../../assets/webdevelopment/wd5.svg"
import D6 from "../../assets/webdevelopment/wd6.svg"
import D7 from "../../assets/webdevelopment/wd7.svg"

import Set1 from "../../assets/webdevelopment/wset1.svg"
import Set2 from "../../assets/webdevelopment/wset2.svg"
import Set3 from "../../assets/webdevelopment/wset3.svg"
import Set4 from "../../assets/webdevelopment/wset4.svg"
import { HashLink } from 'react-router-hash-link'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Webdevelopment = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container} id='webd'>
    <div className={css.container1}>
      <div className={css.wrap1}>

          <div className={css.div1}>
              <span>Elevate Your Online Presence with Expert Web Development Services</span>
             <span>In today's digital landscape, a beautifully crafted website is your online identity's cornerstone. Our seasoned web developers are ready to turn your vision into reality, whether you're a startup, growing business, or established enterprise.</span>
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
{mobile? <Swiper className={css.swiperdiv}
             modules={[Pagination]}
             pagination={true}
             loopFillGroupWithBlank={true}
             slidesPerView={1}
             spaceBetween={0}
             slidesPerGroup={1}
             loop={true}>

                <SwiperSlide>
                <div className={css.box}>
                      <img src={D1} alt="" />
                      <span>Seamless & Speedy Performance</span>
                    <span> Create a responsive website with optimized loading times for all devices and browsers by minimizing file sizes and utilizing browser caching.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box}>
                      <img src={D2} alt="" />
                      <span>Security & Data Safety Net</span>
                    <span>Ensure website security with HTTPS, proper file permissions, and regular audits. Back up site files and configurations to prevent data loss.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box}>
                      <img src={D3} alt="" />
                      <span>Error Handling & Maintenance</span>
                   <span>Craft user-friendly error pages. Maintain your website with updates for bug fixes and performance enhancements.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box}>
                      <img src={D4} alt="" />
                      <span>Cross-Device Accessibility</span>
                    <span>Ensure website accessibility on all devices. Streamline content management for up-to-date site maintenance.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box2}>
                      <img src={D5} alt="" />
                      <span>Universal Browser Compatibility</span>
                      <span>Ensure cross-browser compatibility, reliable hosting, efficient database management, and strong security for dynamic elements on your site.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box2}>
                      <img src={D6} alt="" />
                      <span>Security Across the Board</span>
                    <span>Prioritize robust security for both frontend and backend components, safeguarding static and dynamic elements thoroughly.</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className={css.box2}>
                      <img src={D7} alt="" />
                      <span>Scalability and API Synergy</span>
                  <span>Prepare for scalability, ensuring harmony between frontend design and backend API for dynamic growth.</span>
                  </div>
                </SwiperSlide>




</Swiper> :
              <div className={css.div2contents}>
                  <div className={css.div2contentstop}>
                  <div className={css.box}>
                      <img src={D1} alt="" />
                      <span>Seamless & Speedy Performance</span>
                    <span> Create a responsive website with optimized loading times for all devices and browsers by minimizing file sizes and utilizing browser caching.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D2} alt="" />
                      <span>Security & Data Safety Net</span>
                    <span>Ensure website security with HTTPS, proper file permissions, and regular audits. Back up site files and configurations to prevent data loss.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D3} alt="" />
                      <span>Error Handling & Maintenance</span>
                   <span>Craft user-friendly error pages. Maintain your website with updates for bug fixes and performance enhancements.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D4} alt="" />
                      <span>Cross-Device Accessibility</span>
                    <span>Ensure website accessibility on all devices. Streamline content management for up-to-date site maintenance.</span>
                  </div>

                  </div>


                  <div className={css.div2contentbottom}>
                    
                  <div className={css.box2}>
                      <img src={D5} alt="" />
                      <span>Universal Browser Compatibility</span>
                      <span>Ensure cross-browser compatibility, reliable hosting, efficient database management, and strong security for dynamic elements on your site.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D6} alt="" />
                      <span>Security Across the Board</span>
                    <span>Prioritize robust security for both frontend and backend components, safeguarding static and dynamic elements thoroughly.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D7} alt="" />
                      <span>Scalability and API Synergy</span>
                  <span>Prepare for scalability, ensuring harmony between frontend design and backend API for dynamic growth.</span>
                  </div>

                  </div>

                 
                 
                  

              </div> }
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
                          <div className={css.oddset} id='ssd'
                          
                           >
                              <div className={css.oddsetcontent}
                             
                            
                               >
                                  <span>1. Static Website Development</span>
                                  <span>Our static websites are a testament to the beauty of simplicity. We design with a minimalist approach, focusing on clean layouts, crisp typography, and stunning visuals. The result? A website that exudes elegance while delivering a seamless user experience.</span>
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
                          <div className={css.evenset} id='dwd'>
                              <div className={css.evensetimage}>
                                  <img src={Set2} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>2. Dynamic Website Development</span>
                                   <li className={css.newli}>Customized Solutions: We adapt to your needs, handling complexity in server logic, database integration, and user interactions.</li>
                                    <li className={css.newli}>Bring Ideas to Life: We turn concepts into reality with user-friendly design and functionality.</li>
                                    <li className={css.newli}>Innovative Approach: From servers to user experiences, we make your project captivating and engaging.</li>
                              </div>
                          </div>
                          {/* evenset */}

                           {/* oddset */}
                           <div className={css.oddset} id='ecom'>
                              <div className={css.oddsetcontent}>
                                 <span>3. E-commerce and Web App Development</span>
                                 <span>Transforming ideas into web app wonders! Our UI/UX experts create web applications that blend aesthetics with functionality for an outstanding user experience. Let us design your digital solution with precision and elegance.</span>
                                 {/* <span className={css.packagespan}>Our Ultimate Package</span>
                                    <span className={css.durationspan}>Duration - 2 weeks <br />Quantity - Depending on the application</span> */}
                              </div>
                              <div className={css.oddsetimage}>
                                  <img src={Set3} alt="" /> 

                              </div>
                          </div>
                          {/* oddset */}


                            {/* evenset */}
                            <div className={css.evenset} id='ds'>
                              <div className={css.evensetimage}>
                                  <img src={Set4} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>4. Deployment Services</span>
                                 <li className={css.newli}>Quick Launch: We ensure a swift project launch, getting you online in 1-2 hours with common hosting.</li>
                             <li className={css.newli}>Cloud Efficiency: Opt for cloud hosting for scalability, with deployment tailored to your cloud choice.</li>
                             <li className={css.newli}>Effortless Process: We simplify your journey to digital success, making deployment smooth on common or cloud hosting</li>
                             <li className={css.newli}>Smooth Transition: Transition seamlessly from development to deployment with confidence in our expertise.</li>
                              </div>
                          </div>
                          {/* evenset */}

                           {/* oddset */}
                           <div className={css.oddset} id='ss'>
                              <div className={css.oddsetcontent}>
                                 <span>5. Shopify Solutions</span>
                                <li className={css.newli}>Shopify Experts: We create powerful online stores using Shopify, driving sales and engagement.</li>
                                <li className={css.newli}>Smooth Integration: We seamlessly blend your branding, products, and payments into Shopify for a hassle-free online presence.</li>
                              </div>
                              <div className={css.oddsetimage}>
                                  <img src={Set3} alt="" /> 

                              </div>
                          </div>
                          {/* oddset */}


                            {/* evenset */}
                            <div className={css.evenset} id='wp'>
                              <div className={css.evensetimage}>
                                  <img src={Set4} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>6. WordPress</span>
                                  <li className={css.newli}>WordPress Masters: We design user-friendly websites with a focus on WordPress, combining aesthetics with functionality.</li>
                                 <li className={css.newli}>Tailored WordPress: Our custom themes and plugins ensure your website stands out, meeting your unique needs.</li>
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
              <HashLink to="/contact/#contactform">  <button className={css.hirebtn}>Hire Top Developers</button>  </HashLink>   
              <img src={Bottom} alt="" />
          </div>

      </div>
                  </div>


              </div>
          </div>
    
  </div>
  )
}

export default Webdevelopment
