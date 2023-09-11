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

const SoftwareDevelopment = () => {
  return (
    <div className={css.container}>
      <div className={css.container1}>
        <div className={css.wrap1}>

            <div className={css.div1}>
                <span>Choose Invicious for Software Excellence</span>
                <span>Where Custom Solutions and Innovation Meet. Your trusted partner for software development excellence. In a digital-first world, the right software can transform your business. We're here to make sure it does.</span>
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

                    <div className={css.box}>
                        <img src={D1} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D3} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D5} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D6} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D7} alt="" />
                        <span>Custom Software Mastery</span>
                        <span>No one-size-fits-all here. We excel in crafting custom software solutions driven by your unique vision, from concept to execution.</span>
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
                            <div className={css.oddset}>
                                <div className={css.oddsetcontent}>
                                    <span>1.Custom Software Development</span>
                                    <span>Branding is the art of crafting a unique and memorable identity for your business or personal venture. It involves creating a distinct logo, name, and messaging that sets you apart from competitors and leaves a lasting impression on your audience. Effective branding builds trust, recognition, and loyalty among customers.</span>
                                </div>
                                <div className={css.oddsetimage}>
                                    <img src={Set1} alt="" />

                                </div>
                            </div>
                            {/* oddset */}


                          {/* evenset */}
                            <div className={css.evenset}>
                                <div className={css.evensetimage}>
                                    <img src={Set2} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>2.Software Product Development</span>
                                    <span>Search Engine Optimization (SEO) is the practice of optimizing your website and online content to rank higher in search engine results like Google. By using strategic keywords, improving website structure, and providing valuable content, SEO helps increase your online visibility. It's a vital tool for attracting organic traffic and reaching your target audience effectively.   </span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset}>
                                <div className={css.oddsetcontent}>
                                   <span>3.Software Support and Maintenance</span>
                                    <span>Content Marketing is the strategic creation and distribution of valuable, relevant, and engaging content to attract, engage, and retain a target audience. By delivering informative and entertaining content, businesses and individuals aim to build trust, authority, and brand loyalty. Content marketing is a powerful way to connect with your audience and drive desired actions.</span>
                                </div>
                                <div className={css.oddsetimage}>
                                    <img src={Set3} alt="" /> 

                                </div>
                            </div>
                            {/* oddset */}


                              {/* evenset */}
                              <div className={css.evenset}>
                                <div className={css.evensetimage}>
                                    <img src={Set4} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>4.Software Outsourcing Services</span>
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
