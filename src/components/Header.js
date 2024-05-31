import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
      <div className="hheader">
        <div className = "logo-container" >
            <img className="imgg"
          
                src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                alt="food delivery"
            /> 
        </div>
        
        <div className="nav-items">
          <ul>
            <li>
            <Link to = "/">Home</Link>
            </li>

            <li >
              <Link to = "/about">About us</Link>
            </li>

            <li>
            <Link to = "/cart">cart</Link>
            </li>

            <li>
            <Link to = "/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header