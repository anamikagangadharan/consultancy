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
               <span></span>
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
                        <span>Custom Software Mastery</span>
                      <span> </span>
                    </div>
                    <div className={css.box}>
                        <img src={D2} alt="" />
                        <span>Product Innovation</span>
                      <span></span>
                    </div>
                    <div className={css.box}>
                        <img src={D3} alt="" />
                        <span>Reliable Support and Maintenance</span>
                     <span></span>
                    </div>
                    <div className={css.box}>
                        <img src={D4} alt="" />
                        <span>Global Outsourcing Excellence</span>
                      <span></span>
                    </div>

                    </div>


                    <div className={css.div2contentbottom}>
                      
                    <div className={css.box2}>
                        <img src={D5} alt="" />
                        <span>Cutting-Edge Technology</span>
                        <span></span>
                    </div>
                    <div className={css.box2}>
                        <img src={D6} alt="" />
                        <span>Data Security</span>
                      <span></span>
                    </div>
                    <div className={css.box2}>
                        <img src={D7} alt="" />
                        <span>Proven Success</span>
                    <span></span>
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
                                    <span>1.Custom Software Development</span>
                                    <span></span>
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
                                   
                                    <span>2.Software Product Development</span>
                                     <span></span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='ssm'>
                                <div className={css.oddsetcontent}>
                                   <span>3.Software Support and Maintenance</span>
                                   <span></span>
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
                                   
                                    <span>4.Software Outsourcing Services</span>
                                    <span></span>
                                </div>
                            </div>
                            {/* evenset */}

                             {/* oddset */}
                             <div className={css.oddset} id='ssm'>
                                <div className={css.oddsetcontent}>
                                   <span>5.Software Support and Maintenance</span>
                                   <span></span>
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
                                   
                                    <span>6.Software Outsourcing Services</span>
                                    <span></span>
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
