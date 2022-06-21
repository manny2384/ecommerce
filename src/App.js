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
import Product from './components/product';


function App() {

  const [state, setState] = useState('home');
  useEffect(()=>{
    console.log("re-rendering");

  }, [state]);

  const[product, setProduct] = useState('none');
  useEffect(()=>{
    console.log("updating product page");
  }, [product]);

  return (
    <div className="App">
    
      <Header setState={setState} state={state} setProduct={setProduct} />
      
      <Group17 setState={setState} state={state} />
      
      <div className='placeholder'>

        {state==='home' && <HomeContent setState={setState} setProduct={setProduct} />}
        {state==='earphones' && <Earphones setState={setState} setProduct={setProduct} />}
        {state==='speakers' && <Speakers setState={setState} setProduct={setProduct} />}
        {state==='headphones' && <Headphones setState={setState} setProduct={setProduct} />}
        {state==='product' && <Product setState={setState} setProduct={setProduct} product={product} />}

      </div>

      <Beforefooter />
      <Footer logo={logo} />

    </div>);
}

export default App;
