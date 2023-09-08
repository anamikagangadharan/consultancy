import './App.css';
import About from './components/About/About';
import Approach from './components/Approach/Approach';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Main/>
      <About/>
      <Approach/>
    </div>
  );
}

export default App;
