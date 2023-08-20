import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Story from '../Story/Story';
import Best_Seller from '../Best_Seller/Best_Seller';

const Shared = () => {
    return (
        <div>
            <Banner></Banner>
            <Best_Seller></Best_Seller>
            <Brand></Brand>
            <Story></Story>
        </div>
    );
};

export default Shared;