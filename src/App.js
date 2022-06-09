
import './App.css';
import logo from './assets/shared/desktop/logo.svg';
import cart from './assets/shared/desktop/icon-cart.svg';

// import components
import Header from './components/header';
import Footer from './components/footer';
import Beforefooter from './components/beforefooter';
import HomeContent from './components/home-content';


// icons
import arrowRight from './assets/shared/desktop/icon-arrow-right.svg';

// featured products
import headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png';


function App() {

  return (
    <div className="App">
    
      <Header />
      
      <div className='featured-products'>
        <div className='item'>
          <span>
            <img src={headphones} alt="headphones" />
          </span>
          <span> Headphones </span>
          <span>
            Shop <img src={arrowRight} alt="arrowright" />
          </span>
          <span></span>
        </div>
        <div className='item'>
          <span>
            <img src={speakers} alt="speakers" />
          </span>
          <span> Speakers </span>
          <span>
            Shop <img src={arrowRight} alt="arrowright" />
          </span>
          <span></span>
        </div>
        <div className='item'>
          <span>
            <img src={earphones} alt="earphones" />
          </span>
          <span> Earphones </span>
          <span>
            Shop <img src={arrowRight} alt="arrowright" />
          </span>
          <span></span>
        </div>



      </div>
      
      <div className='placeholder'>
      <HomeContent />
      </div>

      <Beforefooter />
      <Footer logo={logo} />

    </div>);
}

export default App;
