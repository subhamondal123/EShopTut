import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Signin from './components/Signin';
import Admin from './components/Admin';
import Signup from './components/Signup';
import CartScreen from './components/CartScreen';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

//   const openMenu =() => {
//     document.querySelector(".sidebar").classList.add("open");
// }
// const closeMenu =() => {
//     document.querySelector(".sidebar").classList.remove("open");
// }


  
const openMenu = () => {
  document.getElementById("mySidebar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
const closeMenu = () => {
  document.getElementById("mySidebar").style.width = "0";
}

  return (
    <div>
    <BrowserRouter>
    <div className="grid-container">
    
      <div className="navbar">
        
            <div><button className="brand" onClick={openMenu}>&#9776;</button></div>
           
            <ul className="left">
                <li>  
                    <Link to ="/">E-SHOP</Link></li>
            </ul>    
            <ul className="right">
                <li>          
                    <a href="">
                    <span className="shoppingCart"><i class="fas fa-cart-plus"></i>
                    <span className="cartCount">0</span>
                    <Link to={'/signin'}><span className="signIn">Sign In</span></Link>
                    <Link to={'/admin'}><span className="admin">Admin</span></Link></span>
                    </a>
                    
                </li>
            </ul>
            
        
        </div>
       
        <aside className="sidebar" id="mySidebar">
        <h4>shopping categories</h4>
        <button className="sidebar-close-button" onClick={closeMenu}>&times;</button>
        <br></br>
        <br></br>
        
        <ul className="category">
            <li><a href="">pants</a></li><br></br>
            <li><a href="">shirts
            </a></li>
        </ul>
    </aside>

    <main className="main">
      <div className="">
      <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/signin" component={Signin} />
          <Route path="/admin" component={Admin} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart/:id?" component={CartScreen} />
      </div>
    </main>

    <div className="footer">
       <footer>All rights Resereved</footer>
       </div>

    </div>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
