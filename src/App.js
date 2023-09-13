import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import DigitalBranding from "./components/DigitalBranding/DigitalBranding";
import UiUx from "./components/UiUx/UiUx";



function App() {
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
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
