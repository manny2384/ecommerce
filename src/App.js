
import './App.css';
import logo from './assets/shared/desktop/logo.svg';
import cart from './assets/shared/desktop/icon-cart.svg';

// images imported
import hero from './assets/home/desktop/image-hero.jpg';
import hero_tablet from './assets/home/tablet/image-header.jpg';
import hero_mobile from './assets/home/mobile/image-header.jpg';

function App() {

  return (
    <div className="App">
    
      <header className='header-bar'>

        <nav className='navigation-bar'>

          <div className='hamburger' onClick={(e)=>{
            document.querySelector(".hamburger").classList.toggle("active");
            document.querySelector(".nav-menu").classList.toggle("active");
          }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

          <div className='nav-branding'> 
            <img src={logo} alt="brand" />
          </div>

          <ul className='nav-menu'>
            <li className='nav-item'> HOME </li>
            <li className='nav-item'> HEADPHONES </li>
            <li className='nav-item'> SPEAKERS </li>
            <li className='nav-item'> EARPHONES </li>
          </ul>
          
          <div className='cart-icon'>
            <img src={cart} alt="cart-icon" />
          </div>
        </nav>

        <div className='header-content'>
          <picture>
            <source srcset={hero_tablet} media="(min-width: 600px)" />
            <source srcset={hero} media="(min-width: 1000px)" />
            <img src={hero_mobile} alt="headphones" />
          </picture>

          <div className='header-product'>
            <span className='item'>NEW PRODUCT</span>
            <span className='item'>XX99 MARK II HEADPHONES</span>
            <span className='item header-prod-desc'>
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </span>
            <span className='item see-prod-btn'>See product</span>
   
          </div>
        </div>
      </header>

      


          

    </div>);
}

export default App;
