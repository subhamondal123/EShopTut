import React, { useState ,useEffect} from 'react';
import data from '../data';
import {Link, Redirect, useHistory,} from 'react-router-dom';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const [qty,setQty] = useState(1);
    const product = data.products.find(x => x._id === props.match.params.id);
    const history = useHistory();

    const handlleAddToCart = () => {
        props.history.push("/cart/"+ props.match.params.id + "?qty=" + qty);
        
    }
    
    return <div>
       <div className="back-to-result"><Link to="/">Back to result</Link></div>
       <div className="details">
           <div className="details-image">
               <img src ={product.image} alt="product"/>
           </div>
           <div className="details-info">
               <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                    <li>Price: <b>${product.price}</b></li>
                    <li>Description:
                        <div>{product.description}</div>
                    </li>
               </ul>
           </div>
           <div className="details-action">
               <ul>
                    <li>Price: <b>${product.price*qty}</b></li>
                    <li>Status:{product.countInStock > 0 ? <b>In Stock</b> : ""} </li>
                    <li>
                        QTY: <select vlaue={qty} onChange={(e) => {setQty(e.target.value)}}>
                               {[...Array(product.countInStock).keys()].map(x=>
                                <option value={x+1}>{x+1}</option>
                                )}
                        </select>
                        </li>
                        <li>
                            {product.countInStock > 0 &&
                           <button className="button" onClick = {handlleAddToCart}>Add to Cart</button>     
                            }
                        </li>
               </ul>
           </div>
       </div>
       </div>
}
export default ProductScreen;