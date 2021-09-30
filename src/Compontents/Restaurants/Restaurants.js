import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import data from '../data.json';
const Restaurants = (props) => {
    const { Name, City, NumberOfReviews, CuisineStyle, Rating, } = props.hotel;
    const { index, value, sortValue } = props;
    const aa = CuisineStyle;

    const [hotels, sethotels] = useState([]);


    useEffect(() => {
        sethotels(data)

    }, [])
    console.log('value', value)


    let hotelsFilter = hotels.filter(hotel => {
        let cuisineStyle = hotel.CuisineStyle.substr(1, hotel.CuisineStyle.length - 2);
        if (cuisineStyle.includes(value)) {
            // allHotels.push(hotel);
            // sethotels(allHotels)
            return hotel;

        }
    })
    sethotels(hotelsFilter)

    let sortHotel;
    if (sortValue == "a") {
        sortHotel = hotels.sort((a, b) => a.Rating - b.Rating);
        sethotels(sortHotel)
    }
    else if (sortValue == "d") {
        sortHotel = hotels.sort((a, b) => b.Rating - a.Rating);
        sethotels(sortHotel)
    }

    console.log('final', hotels)
    return (
        <div>
            <div>

            </div>
            <div className="col-md-6 text-center">

                <Card className="custom shadow-sm p-2 m-4 bg-body rounded" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="productImg" src='' />
                    <Card.Body>
                        <Card.Title className="App" ><b>{Name}</b></Card.Title>
                        <Card.Text className="App" ><b>{City}</b></Card.Text>
                        <Card.Text className="App" ><b>&rarr;Cuisine</b></Card.Text>
                        <Card.Text className="App" ><b>Reviews: {NumberOfReviews}</b></Card.Text>
                    </Card.Body>
                    <div className="row">
                        <div className="col-md-6 ">
                            <Card.Text>
                                {index + 1}
                            </Card.Text>
                        </div>
                        <div className="col-md-6 mb-4 App">
                            {Rating}&#9734;

                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Restaurants;