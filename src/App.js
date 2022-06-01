
import './App.css';

function App() {


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");


  return (
    <div className="App">
    
      <header className='header-bar'>

        <nav className='navigation-bar'>
          <a href="#" className='nav-branding'> DEV. </a>
          <ul className='nav-menu'>
            <li className='nav-item'> HOME </li>
            <li className='nav-item'> HEADPHONES </li>
            <li className='nav-item'> SPEAKERS </li>
            <li className='nav-item'> EARPHONES </li>
          </ul>

          <div className='hamburger' onClick={(e)=>{
            document.querySelector(".hamburger").classList.toggle("active");
            document.querySelector(".nav-menu").classList.toggle("active");
          }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

        </nav>



      </header>

    </div>);
}

export default App;
