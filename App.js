import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fafacebook} from '@fortawesome/free-solid-svg-icons'
import  {Routes,Route} from 'react-router-dom';

import Home from './router/Home';
import About from './router/About';
import Skills from './router/Skills';
import Contact from './router/Contact';
import Header from './router/Header';
import Footer from './router/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      
        </Routes>
       
        <Footer/>
      
        
    </div>
  );
}

export default App;
