import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/consultancy-logo.svg"

const Header = () => {
  return (
    <div className={css.container}> 
    <div className={css.widthwrap}> 
        <div className={css.left}>
            <img src={Logo} alt="" />
        </div>
        <div className={css.right}>
            <ul className={css.rightlist}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header
