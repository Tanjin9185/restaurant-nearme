import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './LoadingRestaurantList.css';
import Restaurants from '../Restaurants/Restaurants';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const LoadingRestaurantList = () => {

    const [hotels, sethotels] = useState(data);


    const handleSelect = (e) => {
        let hotelsFilter = data?.filter(hotel => {
            let cuisineStyle = hotel.CuisineStyle.substr(1, hotel.CuisineStyle.length - 2);
            if (cuisineStyle.includes(e)) {
                return hotel;
            }
        })

        sethotels(hotelsFilter)
    }

    const handleSelectp = (e) => {
        let sortHotel;
        if (e === "a") {
            sortHotel = hotels.sort((a, b) => a.Rating - b.Rating);
        }
        else if (e === "d") {
            sortHotel = hotels.sort((a, b) => b.Rating - a.Rating);
        }

        sethotels(sortHotel);
    }
    return (
        <div classname="container">
            <div className="row">

                <DropdownButton
                    alignRight
                    title="Select"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >

                    {
                        hotels.map(c => c.CuisineStyle.replace(/\[|\]/g, '').split(',').map(cuisine =>

                            <div>

                                <Dropdown.Item eventKey={cuisine}>{cuisine}</Dropdown.Item>

                            </div>

                        ))
                    }
                </DropdownButton>
                <div>
                    <h1>Sort By Rating</h1>
                    <DropdownButton
                        alignRight
                        title='Select'
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectp}
                    >
                        <Dropdown.Item eventKey="a">a</Dropdown.Item>
                        <Dropdown.Item eventKey="d">d</Dropdown.Item>
                    </DropdownButton>
                </div>
                {
                    hotels.map((hotel, index) => (
                        <Restaurants hotel={hotel} key={index} />
                    ))
                }
            </div>
        </div >
    );
};

export default LoadingRestaurantList;