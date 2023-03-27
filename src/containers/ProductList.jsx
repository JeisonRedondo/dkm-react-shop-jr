import React from 'react';
import Productitem from '@components/ProductItem.jsx';
import '@styles/ProductList.scss';

const ProductList = () => {
    return (
        <section className="main-container">
            <div className="ProductList">
                <Productitem />    
            </div>
        </section>
    );
}

export default ProductList;