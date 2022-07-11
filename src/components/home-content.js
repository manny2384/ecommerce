// images
import earphones from '../assets/home/desktop/image-earphones-yx1.jpg';
import earphonest from '../assets/home/tablet/image-earphones-yx1.jpg';
import earphonesm from '../assets/home/mobile/image-earphones-yx1.jpg';
import speakerzx7 from '../assets/home/desktop/image-speaker-zx7.jpg';
import speakerzx7t from '../assets/home/tablet/image-speaker-zx7.jpg';
import speakerzx7m from '../assets/home/mobile/image-speaker-zx7.jpg';
import speakerzx9 from '../assets/home/desktop/image-speaker-zx9.png';
import speakerzx9t from '../assets/home/tablet/image-speaker-zx9.png';
import speakerzx9m from '../assets/home/mobile/image-speaker-zx9.png';

// import helper components


function HomeContent(props){

    return(<div className="home-content">

        <div className='zx9'>
            <picture>
                <source srcset={speakerzx9} media="(min-width: 1000px)" />
                <source srcset={speakerzx9t} media="(min-width: 768px)" />
                <img src={speakerzx9m} alt="speakerzx9" />    
            </picture>    
            <div>
                <span className='item-name'> ZX9 SPEAKER </span>
                <span> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </span>

                <button onClick={()=>{props.setState("product"); props.setProduct("ZX9 SPEAKER")}}> SEE PRODUCT </button>
            </div>
        </div>

        <div className='zx7'> 
            <div>
                <span className='item-name'> ZX7 SPEAKER </span>
                <button onClick={()=>{props.setState("product"); props.setProduct("ZX7 SPEAKER")}}> SEE PRODUCT </button>
            </div>
            <picture>
                <source srcset={speakerzx7} media="(min-width: 1000px)" />
                <source srcset={speakerzx7t} media="(min-width: 768px)" />
                <img src={speakerzx7m} alt="speakerzx7" />
            </picture>
        </div>

        <div className='yx1'>
            <div> 
                <picture>
                    <source srcset={earphones} media="(min-width: 1000px)" />
                    <source srcset={earphonest} media="(min-width: 768px)" />
                    <img src={earphonesm} alt="earphones" />
                </picture>
            </div>
            <div>
                <span className='item-name'> YX1 EARPHONES </span>
                <button onClick={()=>{props.setState("product"); props.setProduct("YX1 WIRELESS EARPHONES")}}> SEE PRODUCT </button>
            </div>
        </div>

    </div>)
}

export default HomeContent;