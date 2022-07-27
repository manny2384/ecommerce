// importing image
import best_gear from '../assets/shared/desktop/image-best-gear.jpg';
import best_gear_t from '../assets/shared/tablet/image-best-gear.jpg';
import best_gear_m from '../assets/shared/mobile/image-best-gear.jpg';

function Beforefooter(props){
    return(<div className="before-footer">
        <div>
            <picture>
                <source srcSet={best_gear} media='(min-width: 1110px)' />
                <source srcSet={best_gear_t} media='(min-width: 768px)' />
                <img src={best_gear_m} alt="best gear pic" />
            </picture>
        </div>
        <div>
            <div> BRINGING YOU THE <span style={{'color':'#D87D4A'}}>BEST</span> AUDIO GEAR </div>
            <div>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
  rooms available for you to browse and experience a wide range of our products. Stop by our store 
  to meet some of the fantastic people who make Audiophile the best place to buy your portable 
  audio equipment.
            </div>
        </div>
    </div>);
}

export default Beforefooter;