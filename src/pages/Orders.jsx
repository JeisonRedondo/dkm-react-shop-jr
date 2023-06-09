import React from 'react';
import OrderItem from '@components/OrderItem.jsx';
import '@styles/Orders.scss';

const Orders = () => {
    return (
        <div class="Orders">
            <div class="Orders-container">
                <h1 class="title">My orders</h1>
                <div class="Orders-content">
                    <OrderItem/>
                </div>
            </div>
        </div>
    );
}

export default Orders;