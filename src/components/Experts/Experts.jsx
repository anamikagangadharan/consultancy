import React from 'react'
import css  from "./Experts.module.css"

import E1 from "../../assets/e1.svg"
import E2 from "../../assets/e2.svg"
import E3 from "../../assets/e3.svg"
import E4 from "../../assets/e4.svg"
import E5 from "../../assets/e5.svg"
import E6 from "../../assets/e6.svg"
import E7 from "../../assets/e7.svg"

const Experts = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>

            <div className={css.div1}>
                <div className={css.line}></div>
                <div className={css.head}>
                    <span>Experts in IT</span>
                    <span>Our Services For Your Growth </span>
                </div>
            </div>

            <div className={css.div2}>
                <div className={css.div2top}>
                    <div className={css.box}>
                        <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E1} alt="" />
                    </div>
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                    <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E2} alt="" />
                    </div>
                        <span>Web Development</span>
                    </div>
                    <div className={css.box}>
                    <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E3} alt="" />
                    </div>
                        <span>Mobile App Development</span>
                    </div>
                    <div className={css.box}>
                    <div className={css.logo}></div>
                        
                    <div className={css.circles}>
                    <img src={E4} alt="" />
                    </div>
                        <span>Digital Branding</span>
                    </div>
                </div>
                <div className={css.div2bottom}>
                <div className={css.box}>
                <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E5} alt="" />
                    </div>
                        
                        <span>Software Development</span>
                    </div>
                    <div className={css.box}>
                    <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E6} alt="" />
                    </div>
                        <span>UI/UX Design Service</span>
                    </div>
                    <div className={css.box}>
                    <div className={css.logo}></div>
                    <div className={css.circles}>
                    <img src={E7} alt="" />
                    </div>
                        <span>Application Services</span>
                    </div>

                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Experts
