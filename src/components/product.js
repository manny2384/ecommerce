import React, {useState, useEffect } from 'react';
import myData from './products.json';
import IMAGES from './images';


function Product(props){
    
    // console logs to help
    console.log("***** Show Product info for ", props.product);
    console.log('****** promotion gallery', myData[props.product]['also']);

    // quantitative tracker for cart 
    const[quantity, setQuantity] = useState(0);
    useEffect(()=>{
        console.log("aggregating product");
    }, [quantity]);

    // contents included in box
    const[box] = useState(myData[props.product]['in_the_box']);

    // quantitative value of contents in box
    const[q] = useState(myData[props.product]['in_the_box_q']);

    // features of product
    const[features] = useState(myData[props.product]['features']);

    // promotional items for current product
    const[promos, setPromos] = useState(myData[props.product]['also']);
    useEffect(()=>{
        console.log("updating promotion gallery");
    }, [promos]);

    return(<div className='product-element'>

        <div className='main-info'>

            <picture> 
                <source srcSet={ IMAGES[props.product + " desktop"] } media='(min-width: 1000px)' />
                <source srcSet={ IMAGES[props.product + " tablet"] } media='(min-width: 700px)' />
                <img src={ IMAGES[props.product + " mobile"] } alt="productpicture" />
            </picture>

            <div className='main-info-desc'>

                { // only shown if product is advertised as new
                    myData[props.product]['new'] && 
                    <span style={{'color':'#D87D4A'}}> NEW PRODUCT </span>
                }
                <span style={{'font-size': '28px', 'letterSpacing':'1px'}}> {props.product} </span>
                
                <span style={{'font-size': '15px', 'opacity':'0.5'}}> {myData[props.product]['description']} </span>
                
                <span style={{'font-size': '18px'}}> $ {myData[props.product]['price']} </span>

                <span className='counter'> 
                    <div className="quantity-counter"> 
                        <span onClick={()=>{
                            if(quantity > 0)
                                setQuantity(quantity - 1);
                        }}> - </span> 
                        <input type="number" name="quantity" value={quantity} />
                        <span onClick={()=>{setQuantity(quantity + 1)}}> + </span>
                    </div>
                    <button onClick={()=>{
                        if(quantity < 1){
                            console.log("need to add a quantity");
                        }
                        else{
                            console.log("add product to cart")
                        }
                    }}> ADD TO CART </button>
                </span>

            </div>

        </div>

        <div className='features-box'>

            <div className='features'>
                <div> FEATURES </div>
                <ul>
                    {features.map((elem, i)=>{
                        return(<li>{elem}</li>)
                    })}
                </ul>

            </div>
            <div className='in-the-box'>
                <div style={{'font-size':'24px'}}> IN THE BOX </div>
                <ul>
                    {box.map((elem, i)=>{
                        return(<li> <span> {q[i]}x </span> <span> {elem} </span> </li>)
                    })}
                </ul>
            </div>

        </div>

        <div className='product-gallery'>

            <div> 
                <picture> 
                    <source srcSet={IMAGES[props.product + " 1 desktop"]} media="(min-width: 1000px)"/>
                    <source srcSet={IMAGES[props.product + " 1 tablet"]} media="(min-width: 700px)"/>
                    <img src={IMAGES[props.product + " 1 mobile"]} alt="image_gallery_1"/>
                </picture>
                <picture> 
                    <source srcSet={IMAGES[props.product + " 2 desktop"]} media="(min-width: 1000px)"/>
                    <source srcSet={IMAGES[props.product + " 2 tablet"]} media="(min-width: 700px)"/>
                    <img src={IMAGES[props.product + " 2 mobile"]} alt="image_gallery_2"/>
                </picture>
            </div>

            <div> 
                <picture>
                    <source srcSet={IMAGES[props.product + " 3 desktop"]} media="(min-width: 1000px)"/>
                    <source srcSet={IMAGES[props.product + " 3 tablet"]} media="(min-width: 700px)"/>
                    <img src={IMAGES[props.product + " 3 mobile"]} alt="image_gallery_3"/>
                </picture>
            </div>

        </div>

        <div className='promotion-gallery'>

            <div style={{'padding':'0 0 30px 0'}}> YOU MAY ALSO LIKE </div>
            <div>
                <ul>
                    {
                        promos.map((elem, i)=>{
                            return(<li key={i}> 
                                <picture>
                                    <source srcSet={IMAGES[elem + " promo 3"]} media="(min-width: 1000px)" />
                                    <source srcSet={IMAGES[elem + " promo 2"]} media="(min-width: 700px)" />
                                    <img srcSet={IMAGES[elem + " promo 1"]} alt="promotion gallery" />
                                </picture>
                                <span> {elem} </span>
                                <button onClick={()=>{ props.setProduct(elem); setPromos(myData[props.product]['also']); }}> SEE PRODUCT </button>
                            </li>)
                        })
                    }
                </ul>                
            </div>

        </div>

    </div>);
}



export default Product;