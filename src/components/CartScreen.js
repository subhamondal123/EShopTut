import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
 import data from '../data';
 import useState from 'react';
 import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addToCart,removeFromCart} from "../actions/cartActions";
function CartScreen(props) {

     const productId = props.match.params.id;
    const item = data.products.find(x => x._id === props.match.params.id);
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    //const [cart,setCart] = useState([]);

    // const cart = useSelector(state => state.cart);

    // const { cartItems } = cart;
    const mapStateToProps = state =>({
    
    })
    const mapDispatchToProps = dispatch =>({
        handlleAddToCart:data=> dispatch(addToCart(productId,qty))
    })
    // const dispatch = useDispatch();

    //     useEffect(()=>{
    //     if(productId){
    //         dispatch(addToCart(productId,qty));
    //     }
    // },[])

    return [ <div classname="cartscreen">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>Shopping cart</h3>
                    <div>price</div>
                    </li>
                
                <li>
                   <div className="cart-image"><img src={item.image} alt="product" /></div> 
                    <div className="cart-name">
                        <div>{item.name}</div>
                        <div>
                            Qty:
                           {qty}
                           <button type="button" onClick={()=>removeFromCart()} className="button">Remove</button>
                        </div>

                    </div>
                    <div className="cart-price">${item.price}</div>
                    </li>
            </ul>
            </div>
        <div className="cart-action">
            <h3>Subtotal : ${item.price*qty}</h3>
            <button className="button primary">Proceed to checkout</button>
        </div>
    </div>
    ]
}

export default CartScreen;