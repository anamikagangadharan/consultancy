import React from 'react'
import css from "./DigitalBranding.module.css"

import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg" 
import D1 from "../../assets/digitalbranding/dbd1.svg"
import D2 from "../../assets/digitalbranding/dbd2.svg"
import D3 from "../../assets/digitalbranding/dbd3.svg"
import D4 from "../../assets/digitalbranding/dbd4.svg"
import D5 from "../../assets/digitalbranding/dbd5.svg"
import D6 from "../../assets/digitalbranding/dbd6.svg"
import D7 from "../../assets/digitalbranding/dbd7.svg"
import Set1 from "../../assets/digitalbranding/dbset1.svg"
import Set2 from "../../assets/digitalbranding/dbset2.svg"
import Set3 from "../../assets/digitalbranding/dbset3.svg"
import Set4 from "../../assets/digitalbranding/dbset4.svg"
import Set5 from "../../assets/digitalbranding/dbset5.svg"
import Set6 from "../../assets/digitalbranding/dbset6.svg"
import { HashLink } from 'react-router-hash-link'

const DigitalBranding = () => {
  return (
    <div className={css.container} id='db'>
    <div className={css.container1}>
      <div className={css.wrap1}>

          <div className={css.div1}>
              <span> Elevate Your Brand with Our Digital Expertise</span>
              <span>Where innovation meets creativity, and your brand's digital journey begins. In an era driven by digital experiences, your brand's success hinges on captivating design, strategic marketing, and staying ahead of the curve. That's where we come in.</span>
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
                      <span>360-Degree Digital Expertise</span>
                     <span>We provide a full range of digital branding services, from logo design and captivating social media content to SEO optimization and stunning animations – all in one place.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D2} alt="" />
                      <span>Creative Brilliance</span>
                     <span>Our creative team turns your ideas into visual masterpieces, be it a memorable logo, share-worthy social content, or captivating animations.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D3} alt="" />
                      <span>Digital Marketing Pioneers</span>
                     <span>In the digital realm, visibility is crucial. We specialize in strategies that shine a spotlight on your brand, from SEO for higher rankings to impactful targeted campaigns.</span>
                  </div>
                  <div className={css.box}>
                      <img src={D4} alt="" />
                      <span>Cutting-Edge Technology</span>
                     <span>We stay updated on the latest trends and tech, infusing innovation into our solutions, making your brand stand out in the digital landscape.</span>
                  </div>

                  </div>


                  <div className={css.div2contentbottom}>
                    
                  <div className={css.box2}>
                      <img src={D5} alt="" />
                      <span>Data-Driven Decisions</span>
                     <span>We measure, not guess. Our data-driven approach guarantees every decision is backed by insights, resulting in ROI-driven campaigns.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D6} alt="" />
                      <span>Tailored to Your Brand</span>
                     <span>No cookie-cutter solutions here. We delve into your brand's unique identity, crafting strategies and creatives that truly resonate with your target audience.</span>
                  </div>
                  <div className={css.box2}>
                      <img src={D7} alt="" />
                      <span>Client-Centric Approach</span>
                     <span>Your brand's success is our top priority. We work collaboratively, ensuring that your vision is at the core of every project we undertake.</span>
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
                          <div className={css.oddset} id='brand'
                          
                           >
                              <div className={css.oddsetcontent}
                             
                            
                               >
                                  <span>1.Branding</span>
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
                          <div className={css.evenset} id='seo'>
                              <div className={css.evensetimage}>
                                  <img src={Set2} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>2.Search Engine Optimation</span>
                                 <span>Search Engine Optimization (SEO) is the practice of optimizing your website and online content to rank higher in search engine results like Google. By using strategic keywords, improving website structure, and providing valuable content, SEO helps increase your online visibility. It's a vital tool for attracting organic traffic and reaching your target audience effectively.   </span>
                              </div>
                          </div>
                          {/* evenset */}

                           {/* oddset */}
                           <div className={css.oddset} id='cm'>
                              <div className={css.oddsetcontent}>
                                 <span>3.Content Marketing</span>
                                  <span>Content Marketing is the strategic creation and distribution of valuable, relevant, and engaging content to attract, engage, and retain a target audience. By delivering informative and entertaining content, businesses and individuals aim to build trust, authority, and brand loyalty. Content marketing is a powerful way to connect with your audience and drive desired actions.</span>
                              </div>
                              <div className={css.oddsetimage}>
                                  <img src={Set3} alt="" /> 

                              </div>
                          </div>
                          {/* oddset */}


                            {/* evenset */}
                            <div className={css.evenset} id='dmt'>
                              <div className={css.evensetimage}>
                                  <img src={Set4} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>4.Digital Marketing Trends</span>
                                 <span>Digital Marketing Trends are ever-evolving strategies and tactics used by businesses to stay ahead in the online landscape. These trends encompass innovations in social media, video marketing, AI-driven personalization, voice search optimization, and more. Staying updated with these trends is crucial for businesses seeking to maximize their online impact and stay competitive in the digital realm.</span>
                              </div>
                          </div>
                          {/* evenset */}


                           {/* oddset */}
                           <div className={css.oddset} id='vc'>
                              <div className={css.oddsetcontent}>
                                 <span>5.Video Content</span>
                                  <span>Video Content is a dynamic and engaging medium that delivers information, entertainment, and storytelling through visual and auditory means. It has become a powerful tool in digital marketing, social media, and online communication. Video content can include explainer videos, vlogs, tutorials, product demonstrations, and more, offering a compelling way to connect with audiences and convey messages effectively.</span>
                              </div>
                              <div className={css.oddsetimage}>
                                  <img src={Set5} alt="" /> 

                              </div>
                          </div>
                          {/* oddset */}


                            {/* evenset */}
                            <div className={css.evenset} id='amg'>
                              <div className={css.evensetimage}>
                                  <img src={Set6} alt="" />
                              </div>
                              <div className={css.evensetcontent}>
                                 
                                  <span>6.Animation / Motion Graphics</span>
                                 <span>Animation and Motion Graphics are creative techniques that bring static visuals to life through movement and storytelling. They involve the use of graphics, images, or text to create dynamic and engaging videos. Animation is a versatile tool used in marketing, education, entertainment, and design to convey complex ideas or captivate audiences with visually appealing narratives.</span>
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

export default DigitalBranding
