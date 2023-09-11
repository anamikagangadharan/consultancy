import React from 'react'
import css  from "./Experts.module.css"

import E1 from "../../assets/e1.svg"

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
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                </div>
                <div className={css.div2bottom}>
                <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>
                    <div className={css.box}>
                        <img src={E1} alt="" />
                        <span>IT Consulting & Services</span>
                    </div>

                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Experts
