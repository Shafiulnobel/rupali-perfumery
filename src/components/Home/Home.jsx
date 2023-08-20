import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;