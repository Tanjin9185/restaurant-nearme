import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './LoadingRestaurantList.css';
import Restaurants from '../Restaurants/Restaurants';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const LoadingRestaurantList = () => {

    const [hotels, sethotels] = useState(data);
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');


    //set cuisineStyle in dropdwon
    const handleSelect = (e) => {
        let hotelsFilter = data?.filter(hotel => {
            let cuisineStyle = hotel.CuisineStyle.substr(1, hotel.CuisineStyle.length - 2);
            if (cuisineStyle.includes(e)) {
                return hotel;
            }
        })

        sethotels(hotelsFilter);

        setFilterValue(e)
    }

    //ascending, descending order rating lists
    const handleSelectp = (e) => {
        let sortHotel;
        if (e === "ascending") {
            sortHotel = hotels.sort((a, b) => a.Rating - b.Rating);
        }
        else if (e === "descending ") {
            sortHotel = hotels.sort((a, b) => b.Rating - a.Rating);
        }

        sethotels(sortHotel);

        setSortValue(e)
    }
    return (
        <div classname="container">
            <div className="row">

                <div className="d-flex align-items-center justify-content-center col-md-6">
                    <h6 className="text-light">Choose cuisine:</h6>
                    <DropdownButton
                        alignRight
                        title={filterValue ? filterValue : 'Select'}
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
                </div>
                <div className="d-flex align-items-center justify-content-center col-md-6">

                    <h6 className="text-light">Sort By Rating</h6>
                    <DropdownButton
                        alignRight
                        title={sortValue ? sortValue : 'Select'}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectp}
                    >
                        <Dropdown.Item eventKey="ascending"><FontAwesomeIcon icon={faArrowUp} /></Dropdown.Item>
                        <Dropdown.Item eventKey="descending"><FontAwesomeIcon icon={faArrowDown} /></Dropdown.Item>
                    </DropdownButton>

                </div>
                {
                    hotels.map((hotel, index) => (
                        <Restaurants hotel={hotel} key={index} index={index} />
                    ))
                }
            </div>
        </div >
    );
};

export default LoadingRestaurantList;