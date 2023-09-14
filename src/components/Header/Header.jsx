import React, { useEffect, useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/consultancy-logo.svg"

// import Darrow from "../../assets/droparrow.svg"
import Bars from "../../assets/bars.svg"
import { HashLink } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'

const Header = () => {
   

    const mobile= window.innerWidth <=768 ? true : false ;

    const [state,setState]=useState(false)
    const [opened,setOpened]=useState(false)
    const [drop,setDrop]= useState(false)

    const scrollDown=()=>{

        window.scrollY>100? setState(true) :setState(false)
       
    }
    window.addEventListener('scroll',scrollDown)

    useEffect(() => {
        const handleHashChange = () => {
          window.location.reload();
        };
    
        // Listen for hash changes and trigger a reload
        window.addEventListener('hashchange', handleHashChange);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);

 
  return (
    <div className={ state? css.container1 : css.container}> 
    <div className={css.wrap}> 
        <div className={css.left}>
        <HashLink to="/#home">  <img src={Logo} alt="" /></HashLink>   
        </div>
        <div className={css.right}>
            {opened===false && mobile===true ? 
             <div  onClick={() => setOpened(true)}>
             <img  onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
           </div> :
             
       
            <ul className={css.rightlist}>
             <HashLink to="/#home" smooth={true}> <li>Home</li> </HashLink>   
             <HashLink to="/#about" smooth={true}> <li>About</li> </HashLink>   
                <div onClick={()=>setDrop(!drop)} className={css.serviceset}>  <li>Services</li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="iconamoon:arrow-down-2-light">
<path id="Vector" d="M7 10L12 15L17 10" stroke="#E0E0E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

                </div>
                {drop && <div onClick={()=>setDrop(false)} className={css.servicelist}>
                  <div className={css.stop}>
                  <div className={css.types}>
                  <HashLink to='/webd/#webd' >   <span className={css.typehead}>Web Development</span> </HashLink> 
                     <HashLink to='/webd/#ssd' >  <span className={css.spans}>Static Website Development</span> </HashLink>  
                 <HashLink to="/webd/#dwd">      <span className={css.spans}>Dynamic Website Development</span> </HashLink> 
                 <HashLink to="/webd/#ecom">    <span className={css.spans}>E-commerce and Web App Development</span> </HashLink> 
                 <HashLink to="/webd/#ds">      <span className={css.spans}>Deployment Services</span> </HashLink> 
                 <HashLink to="/webd/#ss">     <span className={css.spans}>Shopify Solutions</span> </HashLink> 
                 <HashLink to="/webd/#wp">     <span className={css.spans}>WordPress</span> </HashLink> 
                    </div>
                  
                    <div className={css.types}>
                    <HashLink to="/db/#db" >   <span className={css.typehead}>Digital Branding</span>  </HashLink>
                     <HashLink to="/db/#brand" >    <span className={css.spans}>Branding</span> </HashLink>
                     <HashLink to="/db/#seo">    <span className={css.spans}>Search Engine Optimization</span> </HashLink>
                     <HashLink to="/db/#cm">   <span className={css.spans}>Content Marketing</span> </HashLink>
                     <HashLink to="/db/#dmt">   <span className={css.spans}>Digital Marketing Trends</span> </HashLink>
                     <HashLink to="/db/#vc">   <span className={css.spans}>Video Content</span> </HashLink>
                     <HashLink to="/db/#amg">     <span className={css.spans}>Animation / Motion Graphics</span> </HashLink>
                    </div>
                    <div className={css.types}>
                    <HashLink to="/uiux/#uiux">      <span className={css.typehead}>UI/UX Design Service</span>  </HashLink> 
                    <HashLink to="/uiux/#wd">   <span className={css.spans}>Website Design</span> </HashLink> 
                    <HashLink to="/uiux/#mad">     <span className={css.spans}>Mobile App Design</span> </HashLink> 
                    <HashLink to="/uiux/#wad">     <span className={css.spans}>Web App Design</span> </HashLink> 
                    <HashLink to="/uiux/#red">    <span className={css.spans}>Redesigning</span> </HashLink> 
                    <HashLink to="/uiux/#mvp">    <span className={css.spans}>MVP (Minimum Viable Product)</span> </HashLink> 
                    <HashLink to="/uiux/#wamg">    <span className={css.spans}>Website Animation / Motion Graphics</span> </HashLink> 
                    </div>
                  
                  </div>

                  <div className={css.sbottom}>
                  <div className={css.types}> 
                <HashLink to="swd/#swd">     <span className={css.typehead}>Software Development</span> </HashLink> 
                     <HashLink  to="/swd/#csd">    <span  className={css.spans}>Custom Software Develpment</span>  </HashLink>  
                     <HashLink to="/swd/#spd">    <span className={css.spans}>Software Product Develpment</span>  </HashLink>  
                     <HashLink to="/swd/#ssm">    <span className={css.spans}>Software Support and Maintenance</span> </HashLink> 
                     <HashLink to="/swd/#sos">   <span className={css.spans}>Software Outsourcing Services</span> </HashLink>
                    </div>
                 
                  <div className={css.types}>
                  <HashLink to="/itcs/#itcs">   <span className={css.typehead}>IT Consulting & Services</span> </HashLink> 
                    <HashLink to="/itcs/#am"> <span className={css.spans}>Application Maintenance</span></HashLink>    
                    <HashLink to="/itcs/#itsol"> <span className={css.spans}> IT Solutions</span></HashLink>   
                    <HashLink to="/itcs/#tc"> <span className={css.spans}>Technology Consultancy</span></HashLink>  
                    </div>
                    <div className={css.types}>
                    <HashLink to="/mob/#mob">  <span className={css.typehead}>Mobile App Development</span>  </HashLink>
                      <HashLink to="/mob/#aad">  <span className={css.spans}>Android App Development</span>  </HashLink>    
                      <HashLink to="/mob/#ios">  <span className={css.spans}>iOS App Development</span> </HashLink>  
                      <HashLink to="/mob/#cmas">  <span className={css.spans}>Custom Mobile App Services</span> </HashLink>  
                    </div>
                   

                  </div>
                    </div>}
               
              <HashLink to="/contact/#contact"> <button className={css.headercontactbtn}>Contact Us</button> </HashLink>  
            </ul>}
        </div>
        </div>
    </div>
  )
}

export default Header
