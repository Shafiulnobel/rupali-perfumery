import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';

const Shop = () => {
    return (
        <div>
            <Container>
            <h4 className='my-5 font'>Home / <span style={{ color: 'grey' }}>Shop</span></h4>
            <hr />
            <Products></Products>
            </Container>
        </div>
    );
};

export default Shop;