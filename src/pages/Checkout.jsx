import React from 'react';
import OrderItem from '@components/OrderItem.jsx';
import flechaIcon from '@icons/flechita.svg';

const Checkout = () => {
    return (
        <div class="Checkout">
            <div class="Checkout-container">
                <h1 class="title">My orders</h1>
                <div class="Checkout-content">
                    <div class="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={flechaIcon} alt="arrow"/>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
}

export default Checkout;