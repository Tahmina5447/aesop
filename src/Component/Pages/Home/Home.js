import React from 'react';
import Athenaeum from './Athenaeum/Athenaeum';
import Corporate from './Corporate/Corporate';
import Domestic from './Domestic/Domestic';
import Header from './Header/Header';
import Intensive from './Intensive/Intensive';
import Interior from './Interior/Interior';
import StoreLocator from './StoreLocator/StoreLocator.js';
import Superlative from './Superlative/Superlative';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Domestic></Domestic>
            <Interior></Interior>
            <Superlative></Superlative>
            <Athenaeum></Athenaeum>
            <Intensive></Intensive>
            <Corporate></Corporate>
            <StoreLocator></StoreLocator>
            
        </div>
    );
};

export default Home;