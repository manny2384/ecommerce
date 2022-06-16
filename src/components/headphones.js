// import images
import xx99one from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99onet from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99onem from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";

import xx99two from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99twot from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99twom from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

import xx59one from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59onet from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59onem from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

function Headphones(){
    return(<div className="headphones">
        <div className="headphones-prod"> 
            <picture>
                <source srcset={xx99two} media="(min-width: 1120px)" />
                <source srcset={xx99twot} media="(min-width: 690px)" />
                <img src={xx99twom} alt="product" />
            </picture>
            <div className="prod-description" >
                <span style={{'color':'#D87D4A'}}> NEW PRODUCT </span>
                <span style={{'font-size':'28px','letterSpacing':'1px'}}> XX99 MARK II HEADPHONES </span>
                <span style={{'font-size':'15px', 'opacity':'0.5'}}> The new XX99 Mark II headphones is the pinnacle
                of pristine audio. It redefines your premium headphone 
                experience by reproducing the balanced depth and precision 
                of studio-quality sound.</span>
                <button> SEE PRODUCT </button>
            </div>
        </div>
        <div className="headphones-prod"> 
            <picture>
                <source srcset={xx99one} media="(min-width: 1120px)" />
                <source srcset={xx99onet} media="(min-width: 690px)" />
                <img src={xx99onem} alt="product" />
            </picture>
            <div className="prod-description" >
                <span style={{'font-size':'28px','letterSpacing':'1px'}}> XX99 </span>
                <span style={{'font-size':'15px', 'opacity':'0.5'}}> As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles, 
                mixing engineers, and music aficionados alike in studios and on the go.</span>
                <button> SEE PRODUCT </button>
            </div>
        </div>
        <div className="headphones-prod"> 
            <picture>
                <source srcset={xx59one} media="(min-width: 1120px)" />
                <source srcset={xx59onet} media="(min-width: 690px)" />
                <img src={xx59onem} alt="product" />
            </picture>
            <div className="prod-description" >
                <span style={{'font-size':'28px','letterSpacing':'1px'}}> XX59 HEADPHONES </span>
                <span style={{'font-size':'15px', 'opacity':'0.5'}}> Enjoy your audio almost anywhere and customize it to your specific tastes
                with the XX59 headphones. The stylish yet durable versatile wireless headset is a
                brilliant companion at home or on the move.</span>
                <button> SEE PRODUCT </button>
            </div>
        </div>
    
    </div>)
}

export default Headphones;