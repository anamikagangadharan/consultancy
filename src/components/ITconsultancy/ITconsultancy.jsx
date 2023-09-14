import React from 'react'
import css from "./ITconsultancy.module.css"

import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg" 

import D1 from "../../assets/itconsultancy/itd1.svg"
import D2 from "../../assets/itconsultancy/itd2.svg"
import D3 from "../../assets/itconsultancy/itd3.svg"
import D4 from "../../assets/itconsultancy/itd4.svg"
import D5 from "../../assets/itconsultancy/itd5.svg"
import D6 from "../../assets/itconsultancy/itd6.svg"
import D7 from "../../assets/itconsultancy/itd7.svg"

import Set1 from "../../assets/itconsultancy/itset1.svg"
import Set2 from "../../assets/itconsultancy/itset2.svg"
import Set3 from "../../assets/itconsultancy/itset3.svg"


const ITconsultancy = () => {
  return (
    <div className={css.container} id='itcs'>
      <div className={css.container1}>
        <div className={css.wrap1}>

            <div className={css.div1}>
                <span>Your Trusted IT Consultancy Partner for Sustainable Success</span>
               <span>In today's fast-paced technological landscape, businesses need more than just software; they need strategic IT solutions that empower growth and ensure seamless operations.</span>
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
                        <span> Experience and Expertise</span>
                      <span> Our experienced team has a successful track record across diverse industries and stays updated with the latest trends and technologies.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Client-Centric Approach</span>
                      <span>Your success is our priority. We listen to your needs, collaborate closely, and deliver solutions that are perfectly tailored to your requirements.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D3} alt="" />
                        <span> Reliability</span>
                     <span>With invicious, you can count on dependable service and timely delivery. We understand the value of your time and resources.</span>
                    </div>
                    <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Data Security</span>
                      <span>Your data is precious. We implement robust security measures to protect your sensitive information and ensure compliance with industry standards.</span>
                    </div>

                    </div>


                    <div className={css.div2contentbottom}>
                      
                    <div className={css.box2}>
                        <img src={D5} alt="" />
                        <span>Scalability</span>
                        <span>Our solutions are designed with growth in mind. We build scalable IT infrastructure that can adapt to your expanding needs.</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D6} alt="" />
                        <span>Cost Efficiency</span>
                      <span>We are committed to delivering value. Our services are designed to maximize your ROI, ensuring that your investments in technology yield tangible benefits</span>
                    </div>
                    <div className={css.box2}>
                        <img src={D7} alt="" />
                        <span>Holistic Approach</span>
                    <span>We provide comprehensive, long-term IT strategies aligned with your business goals for lasting success in the evolving tech landscape.</span>
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
                            <div className={css.oddset} id='am'
                            
                             >
                                <div className={css.oddsetcontent}
                               
                              
                                 >
                                    <span>1. Application Maintenance</span>
                                    <span>We understand that your business-critical applications need constant attention. Our team of experts is here to provide meticulous maintenance, ensuring your applications run smoothly, stay secure, and evolve with your needs.</span>
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
                            <div className={css.evenset} id='itsol'>
                                <div className={css.evensetimage}>
                                    <img src={Set2} alt="" />
                                </div>
                                <div className={css.evensetcontent}>
                                   
                                    <span>2. IT Solutions</span>
                                     <span>Our IT solutions are tailored to address your unique challenges and goals. Whether it's optimizing existing systems, implementing cutting-edge technology, or designing custom software, we have the expertise to transform your IT landscape.</span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='tc'>
                                <div className={css.oddsetcontent}>
                                   <span>3. Technology Consultancy</span>
                                   <span>In an ever-evolving tech world, staying ahead is essential. We offer strategic technology consultancy to align your IT strategy with your business objectives, providing you with a competitive edge.</span>
                                </div>
                                <div className={css.oddsetimage}>
                                    <img src={Set3} alt="" /> 

                                </div>
                            </div>
                            {/* oddset */}



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

export default ITconsultancy
