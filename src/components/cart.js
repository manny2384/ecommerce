function Cart(props){

    console.log(props['cart']);

    return(<div className="outer-cart" onClick={()=>{
        document.querySelector(".outer-cart").classList.toggle("active");
    }}>
        <div className="cart">
            <div> <span> Cart (3) </span> <span>Remove all</span></div>
            <ul>
                {props.cart.map((elem, i)=>{
                    console.log(elem);
                })}
            </ul>
            <div> <span> Total </span> <span> $5000 </span></div>
            <button> CHECKOUT </button>
        </div>
    </div>);
}

export default Cart;