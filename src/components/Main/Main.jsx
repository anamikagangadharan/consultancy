import React from 'react'
import css from "./Main.module.css"
import Main1 from "../../assets/main1.svg"
import { HashLink } from 'react-router-hash-link'
const Main = () => {
  return (
    <div className={css.container} id='home'>
        <div className={css.wrap}>
        <div className={css.left}>
            <div className={css.lediv1}>
                <span>
                "Welcome to Invicious Consultancy Services, your gateway to seamless technology solutions and expert IT guidance. Unlock the power of innovation and achieve business excellence with our dedicated team of professionals."
                </span>
            </div>
            <div className={css.lediv2}>
              <HashLink to="/contact/#contactform">  <button className={css.getinbutton}>Get in Touch</button> </HashLink>
            </div>

            <div className={css.lediv2}></div>

        </div>

        <div className={css.right}>
            <img src={Main1} alt="" />
        </div>

        {/* <div>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
            <h1>gjgchjgchfxcfgxg</h1>
        </div> */}
       
       </div>
    </div>
  )
}

export default Main
