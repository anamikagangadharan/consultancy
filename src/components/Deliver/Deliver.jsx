import React from 'react'
import css from "./Deliver.module.css"
import Dimage from "../../assets/dimage.svg"
import Top from "../../assets/Top.svg"
import Bottom from "../../assets/bottom.svg"
import { HashLink } from 'react-router-hash-link'

const Deliver = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
        <div className={css.div1}>
            <div className={css.line}></div>
            <div className={css.head}>
          <span>Invicious</span>
          <span> Delivering unified experience cross online & offline channels</span>
        </div>
        </div>

        <div className={css.div2}>
            <img src={Dimage} alt="" />
        </div>

        <div className={css.div3}>
            <span>We are committed to delivering the highest quality of products and services to our customers, 
as shown in our previous resounding success.</span>
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
  )
}

export default Deliver
