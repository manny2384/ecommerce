import {React, useState, useEffect} from 'react';
import './App.css';
import logo from './assets/shared/desktop/logo.svg';


// import assisting components
import Header from './components/header';
import Footer from './components/footer';
import Beforefooter from './components/beforefooter';
import HomeContent from './components/home-content';
import Group17 from './components/group17';

// import seperate pages
import Speakers from './components/speakers';
import Earphones from './components/earphones';
import Headphones from './components/headphones';



function App() {

  const [state, setState] = useState('home');
  useEffect(()=>{
    console.log("re-rendering");

  }, [state]);

  return (
    <div className="App">
    
      <Header setState={setState} state={state} />
      
      <Group17 />
      
      <div className='placeholder'>

        {state==='home' && <HomeContent />}
        {state==='earphones' && <Earphones />}
        {state==='speakers' && <Speakers />}
        {state==='headphones' && <Headphones />}


      </div>

      <Beforefooter />
      <Footer logo={logo} />

    </div>);
}

export default App;
