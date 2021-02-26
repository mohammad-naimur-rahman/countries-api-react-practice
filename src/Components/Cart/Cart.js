import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <h2>Country added: {props.cart.length}</h2>
            <ul>
                {
                    props.cart.map(countryAdded => <li>{countryAdded.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;