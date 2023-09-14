import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BackTo from "../src/assets/backtotop.svg" 

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import DigitalBranding from "./components/DigitalBranding/DigitalBranding";
import UiUx from "./components/UiUx/UiUx";
import Webdevelopment from "./components/Webdevelopment/Webdevelopment";
import ITconsultancy from "./components/ITconsultancy/ITconsultancy";
import Mobileapp from "./components/MobileApp/Mobileapp";
import { useState } from "react";





function App() {

  const [state,setState]=useState(false)

  const backTo=()=>{
    
  if (window.scrollY>100){
    setState(true)
  } else{
    setState(false)
  }

  }

  window.addEventListener("scroll",backTo)
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/swd" element={<SoftwareDevelopment />} />
              <Route path="/db" element={<DigitalBranding/>} />
              <Route path="/uiux" element={<UiUx/>} />
              <Route path="/webd" element={<Webdevelopment/>} />
              <Route path="/itcs" element={<ITconsultancy/>} />
              <Route path="/mob" element={<Mobileapp/>} />
             
            

        </Routes>

        <Footer /> 
        <img onClick={()=>window.scrollTo({top: 0,left: 0,behavior: "smooth",})} className= { state? "tobtn2":" tobtn"} src={BackTo} alt=''></img>

      </Router>
    </div>
  );
}

export default App;
