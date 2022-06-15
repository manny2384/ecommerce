
import yx1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import yx1t from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg';
import yx1m from '../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';


function Earphones(){
    return(<div className="earphones">
        <div className="earphones-prod"> 
            <picture>
                <source srcset={yx1} media="(min-width: 1120px)" />
                <source srcset={yx1t} media="(min-width: 690px)" />
                <img src={yx1m} alt="product" />
            </picture>
            <div className="prod-description" >
                <span> NEW PRODUCT </span>
                <span> YX1 WIRELESS EARPHONES </span>
                <span> Tailor your listening experience with bespoke dynamic 
                    drivers from the new YX1 Wireless Earphones. Enjoy incredible 
                    high-fidelity sound even in noisy environments with its 
                    active noise cancellation feature.</span>
                <button> SEE PRODUCT </button>
            </div>
        </div>
    </div>)
}

export default Earphones;