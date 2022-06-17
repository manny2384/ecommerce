import myData from './products.json';

function Product(props){
    console.log(myData);

    return(<div>
        product information needed for {props.product}
    </div>);
}

export default Product;