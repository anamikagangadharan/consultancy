import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/consultancy-logo.svg"

import Darrow from "../../assets/droparrow.svg"
import Bars from "../../assets/bars.svg"

const Header = () => {

    const mobile= window.innerWidth <=768 ? true : false ;

    const [state,setState]=useState(false)
    const [opened,setOpened]=useState(false)

    const scrollDown=()=>{

        window.scrollY>100? setState(true) :setState(false)
       
    }
    window.addEventListener('scroll',scrollDown)
  return (
    <div className={ state? css.container1 : css.container}> 
    <div className={css.wrap}> 
        <div className={css.left}>
            <img src={Logo} alt="" />
        </div>
        <div className={css.right}>
            {opened===false && mobile===true ? 
             <div  onClick={() => setOpened(true)}>
             <img  onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
           </div> :
             
       
            <ul className={css.rightlist}>
                <li>Home</li>
                <li>About</li>
                <div className={css.serviceset}>  <li>Services</li>
                <img src={Darrow} alt="" /> 
                </div>
               
                <li>Contact Us</li>
            </ul>}
        </div>
        </div>
    </div>
  )
}

export default Header
