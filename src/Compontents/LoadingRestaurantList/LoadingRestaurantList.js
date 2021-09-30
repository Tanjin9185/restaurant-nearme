import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './LoadingRestaurantList.css';
import Restaurants from '../Restaurants/Restaurants';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const LoadingRestaurantList = () => {

    const [hotels, sethotels] = useState([]);

    useEffect(() => {
        sethotels(data)
    }, [hotels])

    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        console.log('select', e);
        setValue(e)
    }
    const [valuep, setValuep] = useState('');
    const handleSelectp = (e) => {
        console.log('seleffct', e);
        setValuep(e)
    }
    return (
        <div classname="container">
            <div className="row">

                <DropdownButton
                    alignRight
                    title={value ? value : 'select option'}
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
                        title={valuep ? valuep : 'Selecet'}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectp}
                    >
                        <Dropdown.Item eventKey="a">a</Dropdown.Item>
                        <Dropdown.Item eventKey="d">d</Dropdown.Item>
                    </DropdownButton>
                </div>
                {
                    hotels.map((hotel, index) => <Restaurants hotel={hotel} value={value} sortValue={valuep} index={index} ></Restaurants>)
                }
            </div>
        </div >
    );
};

export default LoadingRestaurantList;