import React from 'react';
import banner from '../../images/banner.jpg';
import LoadingRestaurantList from '../LoadingRestaurantList/LoadingRestaurantList';
// import Restaurants from '../Restaurants/Restaurants';
const Home = () => {
    return (
        <>
            <div className="text-center">
                <img src={banner} alt="" />
                <LoadingRestaurantList></LoadingRestaurantList>
            </div>
        </>
    );
};

export default Home;