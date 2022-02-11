import './App.css';
import Home from './components/home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience';
import Nav from './components/navbar.js'
import Contact from './components/contact.jsx';
// import { BrowserRouter as Router, Route , Routes } from "react-router-dom";


function App() {
  return (
   
<div>
  <div className='fixed w-screen'><Nav /></div>
  <div className='homecomp'>< Home /></div>
  <div className='aboutComp'>< About /></div>
  <div className='experienceComp'>< Experience/></div>
  <div className='contactComp'>< Contact/></div>
</div>


    
  );
}

export default App;
