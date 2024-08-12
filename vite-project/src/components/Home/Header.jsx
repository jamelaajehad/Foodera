import React from "react"; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AppHeader= ()=> {
    return (
       
            <div className="container">
                <div className="row"> 
                 <div className="col-md-6 text-section">
                    <h2>Good food choices are good investments. </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                    <button>Order Now 
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button>Learn More
                    <FontAwesomeIcon icon={faArrowRight } />
                    </button>
                </div>
                <div className="col-md-6 image-section">
              
                </div>
              </div>
            </div>
       
     
    )
}

export default AppHeader ;