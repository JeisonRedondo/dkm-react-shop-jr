import React from 'react';
import Productitem from '../components/ProductItem.jsx';
import '../styles/ProductList.scss';

const ProductList = () => {
    return (
        <section class="main-container">
            <div class="ProductList">
                <Productitem />    
            </div>
        </section>
    );
}

export default ProductList;