//
import zx9 from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import zx9t from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import zx9m from '../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';

import zx7 from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import zx7t from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import zx7m from '../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';


function Speakers(props){
    return(<div className="speakers">
        
        <div className="speakers-prod"> 
            <picture>
                <source srcset={zx9} media="(min-width: 1120px)" />
                <source srcset={zx9t} media="(min-width: 690px)" />
                <img src={zx9m} alt="product" />
            </picture>
            <div className="prod-description" >
                <span style={{'color':'#D87D4A'}}> NEW PRODUCT </span>
                <span style={{'font-size':'28px','letterSpacing':'1px'}}> ZX9 SPEAKER </span>
                <span style={{'font-size':'15px', 'opacity':'0.5'}}> Upgrade your sound system with the all new ZX9 active
                    speaker. It’s a bookshelf speaker system that offers truly 
                    wireless connectivity -- creating new possibilities for more
                    pleasing and practical audio setups.</span>

                <button onClick={()=>{props.setState("product"); props.setProduct("ZX9 SPEAKER")}}> SEE PRODUCT </button>
            </div>
        </div>

        <div className="speakers-prod"> 
            <picture>
                <source srcset={zx7} media="(min-width: 1120px)" />
                <source srcset={zx7t} media="(min-width: 690px)" />
                <img src={zx7m} alt="product" />
            </picture>
            <div className="prod-description" >
                <span style={{'font-size':'28px','letterSpacing':'1px'}}> ZX7 SPEAKER </span>
                <span style={{'font-size':'15px', 'opacity':'0.5'}}> Stream high quality sound wirelessly with minimal loss. 
                    The ZX7 bookshelf speaker uses high-end audiophile components 
                    that represents the top of the line powered speakers for home 
                    or studio use.</span>

                    <button onClick={()=>{props.setState("product"); props.setProduct("ZX7 SPEAKER")}}> SEE PRODUCT </button>
            </div>
        </div>

    </div>)
}

export default Speakers;