import React, {useState, useEffect } from 'react';
import myData from './products.json';
import IMAGES from './images';


function Product(props){
    console.log("***** Show Product info for ", props.product);
    
    const[quantity, setQuantity] = useState(0);
    useEffect(()=>{
        console.log("aggregating product");
    }, [quantity]);

    const[box] = useState(myData[props.product]['in_the_box']);
    const[q] = useState(myData[props.product]['in_the_box_q']);


    return(<div className='product-element'>

        <div className='main-info'>
            <picture> 
                <source srcSet={ IMAGES[props.product + " desktop"] } media='(min-width: 1000px)' />
                <source srcSet={ IMAGES[props.product + " tablet"] } media='(min-width: 700px)' />
                <img src={ IMAGES[props.product + " mobile"] } alt="productpicture" />
            </picture>

            <div className='main-info-desc'>
                {myData[props.product]['new'] && <span> NEW PRODUCT </span>}
                <span> {props.product} </span>
                <span> {myData[props.product]['description']} </span>
                <span> $ {myData[props.product]['price']} </span>
                <span> 
                    <div className="quantity-counter"> 
                        <span onClick={()=>{
                            if(quantity > 0)
                                setQuantity(quantity - 1);
                        }}> - </span> 

                        <input type="number" name="quantity" value={quantity} />

                        <span onClick={()=>{setQuantity(quantity + 1)}}> + </span>
                    </div>
                    
                    <button> ADD TO CART </button>
                </span>
            </div>
        </div>

        <div>
            <div className='features'>
                <p> {myData[props.product]["features"][0]} </p>
                <p> {myData[props.product]["features"][1]} </p>
            </div>
            <div className='in-the-box'>
                <div> IN THE BOX </div>
                <ul>
                    {box.map((elem, i)=>{
                        return(<li> <span> {q[i]}x </span> <span> {elem} </span> </li>)
                    })}
                </ul>
            </div>

        </div>

        <div className='product-imgs'>
            <div> 
                <picture> </picture>
                <picture> </picture>
            </div>

            <div> 
                <picture> </picture>
            </div>
        </div>

        <div className='extra-products'>
            <div> YOU MAY ALSO LIKE </div>
            <div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </div>

    </div>);
}

export default Product;