import React from 'react';
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection />
            <NewsLetter />
        </div>
    )
}

export default Shop;
