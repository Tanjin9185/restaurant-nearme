import React from 'react';
import { Card } from "react-bootstrap";
const Restaurants = ({ hotel }) => {
    let { Name, City, NumberOfReviews, Rating } = hotel
    return (

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
                        {/* <Card.Text>
                                {index + 1}
                            </Card.Text> */}
                    </div>
                    <div className="col-md-6 mb-4 App">
                        {Rating}&#9734;

                    </div>
                </div>
            </Card>

        </div>

    );
};

export default Restaurants;