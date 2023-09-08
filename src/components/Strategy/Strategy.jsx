import React from 'react'
import css from "./Strategy.module.css"
import S1 from "../../assets/s1.png"
import S2 from "../../assets/s2.png"
import S3 from "../../assets/s3.png"
import S4 from "../../assets/s4.png"
import S5 from "../../assets/s5.png"
import Rarrow from "../../assets/rightarrow.svg"

const Strategy = () => {
  return (
    <div className={css.container}> 

    <div className={css.wrap}>

    <div className={css.div1}>
            <div className={css.line}></div>
            <div className={css.head}>
          <span className={css.head1}>Our Creative Team </span> <span className={css.head2}>Your Digital Strategy</span>
        </div>
        </div>

        <div className={css.div2}>

            <div className={css.div2left}>
                <div className={css.leftimages}>
                <img src={S1} alt="" />
                <img src={S2} alt="" />
                </div>

                <div className={css.rightimages}>
                <img src={S3} alt="" />
                <img src={S4} alt="" />
                <img src={S5} alt="" />
                </div>  
            </div>

            <div className={css.div2right}>
                <span> Invicious Team Our Creative works </span>

                <span className={css.spans}> At Invicious, our creative team is your strategic partner in the digital realm. With expertise in UI/UX design, IT consultancy, web development, mobile app development, and digital branding, we fuse innovation and technology to elevate your digital presence.</span>
           
                 <span className={css.spans}> Whether it's crafting intuitive user experiences, offering expert IT guidance, or building cutting-edge web and mobile solutions, we are your compass in the ever-evolving digital landscape.</span>
                 
                 <span className={css.spans}>Let us transform your vision into a powerful online reality.</span>
            
            </div>

        </div>

        <div className={css.div3}>
            <div className={css.knowmore}>
            <span >Know more about us</span>
            <img src={Rarrow} alt="" />
            </div>
            
        </div>
     
       



    </div>
      
    </div>
  )
}

export default Strategy 
