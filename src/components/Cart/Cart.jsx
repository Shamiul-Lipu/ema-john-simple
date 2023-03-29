import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShiping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShiping = totalShiping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShiping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping: ${totalShiping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;