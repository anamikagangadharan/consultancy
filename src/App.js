import './App.css';
import Contact from './components/Contact/Contact';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import SoftwareDevelopment from './components/SoftwareDevelopment/SoftwareDevelopment';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <Router>
     

     

  
      <Header/>
      <Routes>
     
      <Route path='/' exact element={<Home/>}/>
      <Route path='/contact'  element={ <Contact/>}/>
      <Route path='/swd'  element={ <SoftwareDevelopment/> }/>

     
     
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
