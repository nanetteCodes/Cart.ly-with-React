import React, {Component} from 'react';

const EmptyCart = (props) =>{
    return(
        <div className="empty-cart">
            <img src="icons/empty_cart.png" alt="empty-cart"/>
            <h2>Nothing in your cart,</h2>
            <h2>start shopping.</h2>
        </div>
    )
};

export default EmptyCart;
