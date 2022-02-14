import './App.css';
import Home from './components/home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience';
import Nav from './components/navbar.js'
import Contact from './components/contact.jsx';


function App() {
  return (
   
<div>
  <div className='fixed z-10	 w-screen'><Nav /></div>
  <div id='homeComp'>< Home /></div>
  <div id='aboutComp'>< About /></div>
  <div id='experienceComp'>< Experience/></div>
  <div id='contactComp'>< Contact/></div>
</div>


    
  );
}

export default App;
