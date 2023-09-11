import './App.css';

import About from './components/About/About';
import Approach from './components/Approach/Approach';
import Deliver from './components/Deliver/Deliver';
import Experts from './components/Experts/Experts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SoftwareDevelopment from './components/SoftwareDevelopment/SoftwareDevelopment';
import Strategy from './components/Strategy/Strategy';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Main/>
      <About/>
      <Experts/>
      <Approach/>
      <Strategy/>
      <Deliver/>
      <Footer/>
      {/* <SoftwareDevelopment/>  */}
    </div>
  );
}

export default App;
