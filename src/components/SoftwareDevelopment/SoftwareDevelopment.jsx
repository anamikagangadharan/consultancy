import React from 'react'
import css from "./SoftwareDevelopment.module.css"


import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg" 

import D1 from "../../assets/d1.svg"
import D2 from "../../assets/d2.svg"
import D3 from "../../assets/d3.svg"
import D4 from "../../assets/d4.svg"
import D5 from "../../assets/d5.svg"
import D6 from "../../assets/d6.svg"
import D7 from "../../assets/d7.svg"
import Set1 from "../../assets/set1.svg"
import Set2 from "../../assets/set2.svg"
import Set3 from "../../assets/set3.svg"
import Set4 from "../../assets/set4.svg"
import { HashLink } from 'react-router-hash-link'

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const SoftwareDevelopment = () => {

    const mobile = window.innerWidth <= 768 ? true : false;

  
  return (
    <div className={css.container} id='swd'>
      <div className={css.container1}>
        <div className={css.wrap1}>

            <div className={css.div1}>
                <span>Choose Invicious for Software Excellence</span>
                <span>Where Custom Solutions and Innovation Meet. Your trusted partner for software development excellence. In a digital-first world, the right software can transform your business. We're here to make sure it does.</span>
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

                {/* content starts */}

                {mobile?   <Swiper className={css.swiperdiv}
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
                        <span>Custom Software Mastery</span>
                       <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                             </SwiperSlide>

                             <SwiperSlide>
                             <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Product Innovation</span>
                       <span>Got a game-changing software idea? We turn concepts into market-ready reality with user-friendly interfaces and robust functionality.</span>
                    </div>
                             </SwiperSlide>


                             <SwiperSlide>
                             <div className={css.box}>
                        <img src={D3} alt="" />
                        <span>Reliable Support and Maintenance</span>
                       <span>We know software evolves. Our support and maintenance keep your software current, secure, and running smoothly, freeing you to focus on your core business.</span>
                    </div>
                             </SwiperSlide>




                             <SwiperSlide>
                                 <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Global Outsourcing Excellence</span>
                       <span>Utilize our offshore development services for cost-effective, high-quality software solutions, lowering your operational expenses.</span>
                    </div>
                             </SwiperSlide>


                             <SwiperSlide>
                             <div className={css.box2}>
                        <img src={D5} alt="" />
                        <span>Cutting-Edge Technology</span>
                       <span>We lead in tech trends, with developers versed in the latest languages, frameworks, and methods for top-tier 
solutions.</span>
                    </div>
                             </SwiperSlide>




                             <SwiperSlide>
                             <div className={css.box2}>
                        <img src={D6} alt="" />
                        <span>Data Security</span>
                       <span>Your data's security is our paramount priority. We enforce stringent measures, meeting industry standards and regulations.</span>
                    </div>
                             </SwiperSlide>



                             <SwiperSlide>
                             <div className={css.box2}>
                        <img src={D7} alt="" />
                        <span>Proven Success</span>
                       <span>Our track record shines. We've delivered software solutions across diverse industries, fueling business success in the digital world.</span>
                    </div>
                             </SwiperSlide>

                </Swiper>
                 :

                <div className={css.div2contents}>
                    <div className={css.div2contentstop}>
                    <div className={css.box}>
                        <img src={D1} alt="" />
                        <span>Custom Software Mastery</span>
                       <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Product Innovation</span>
                       <span>Got a game-changing software idea? We turn concepts into market-ready reality with user-friendly interfaces and robust functionality.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D3} alt="" />
                        <span>Reliable Support and Maintenance</span>
                       <span>We know software evolves. Our support and maintenance keep your software current, secure, and running smoothly, freeing you to focus on your core business.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Global Outsourcing Excellence</span>
                       <span>Utilize our offshore development services for cost-effective, high-quality software solutions, lowering your operational expenses.</span>
                    </div>

                    </div>


                    <div className={css.div2contentbottom}>
                      
                    <div className={css.box2}>
                        <img src={D5} alt="" />
                        <span>Cutting-Edge Technology</span>
                       <span>We lead in tech trends, with developers versed in the latest languages, frameworks, and methods for top-tier 
solutions.</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D6} alt="" />
                        <span>Data Security</span>
                       <span>Your data's security is our paramount priority. We enforce stringent measures, meeting industry standards and regulations.</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D7} alt="" />
                        <span>Proven Success</span>
                       <span>Our track record shines. We've delivered software solutions across diverse industries, fueling business success in the digital world.</span>
                    </div>

                    </div>

                   
                </div> }

                {/*  content ends */}
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
                                    <span>1. Custom Software Development</span>
                                    <span>Branding is the art of crafting a unique and memorable identity for your business or personal venture. It involves creating a distinct logo, name, and messaging that sets you apart from competitors and leaves a lasting impression on your audience. Effective branding builds trust, recognition, and loyalty among customers.</span>
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
                                   
                                    <span>2. Software Product Development</span>
                                    <span>Search Engine Optimization (SEO) is the practice of optimizing your website and online content to rank higher in search engine results like Google. By using strategic keywords, improving website structure, and providing valuable content, SEO helps increase your online visibility. It's a vital tool for attracting organic traffic and reaching your target audience effectively.   </span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='ssm'>
                                <div className={css.oddsetcontent}>
                                   <span>3. Software Support and Maintenance</span>
                                    <span>Content Marketing is the strategic creation and distribution of valuable, relevant, and engaging content to attract, engage, and retain a target audience. By delivering informative and entertaining content, businesses and individuals aim to build trust, authority, and brand loyalty. Content marketing is a powerful way to connect with your audience and drive desired actions.</span>
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
                                   
                                    <span>4. Software Outsourcing Services</span>
                                   <span>Digital Marketing Trends are ever-evolving strategies and tactics used by businesses to stay ahead in the online landscape. These trends encompass innovations in social media, video marketing, AI-driven personalization, voice search optimization, and more. Staying updated with these trends is crucial for businesses seeking to maximize their online impact and stay competitive in the digital realm.</span>
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

export default SoftwareDevelopment
