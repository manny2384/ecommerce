import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg';
// featured products
import headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

function Group17(props){
    return(<div className='featured-products'>
    <div className='item'>
      <span>
        <img src={headphones} alt="headphones" />
      </span>
      <span> Headphones </span>
      <span onClick={()=>{props.setState("headphones")}}>
        Shop <img src={arrowRight} alt="arrowright" />
      </span>
      <span></span>
    </div>

    <div className='item'>
      <span>
        <img src={speakers} alt="speakers" />
      </span>
      <span> Speakers </span>
      <span onClick={()=>{props.setState("speakers")}}>
        Shop <img src={arrowRight} alt="arrowright" />
      </span>
      <span></span>
    </div>

    <div className='item'>
      <span>
        <img src={earphones} alt="earphones" />
      </span>
      <span> Earphones </span>
      <span onClick={()=>{props.setState("earphones")}}>
        Shop <img src={arrowRight} alt="arrowright" />
      </span>
      <span></span>
    </div>

    </div>);
}

export default Group17;