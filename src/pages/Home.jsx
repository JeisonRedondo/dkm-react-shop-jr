import React from 'react';
import Header from '../components/Header.jsx';
import ProductsPresentation from '../containers/ProductsPresentation.jsx';

const Home = () => {
    return (
        <>
        <Header />
            <ProductsPresentation></ProductsPresentation>
        </>
    );
}

export default Home;