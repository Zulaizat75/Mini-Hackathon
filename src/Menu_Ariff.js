import React, { useState, useEffect } from 'react';
// import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Menu.css";

function Menu () {

    return (
        <div className="menu-container">
            <h1 className="menu-heading">This Our Coffee</h1>

            <div className="row">
                {/* Coffee Card 1 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee1.jpg" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Espresso</Card.Title>
                            <Card.Text>
                                Description: A strong, concentrated coffee shot.<br /> Serving Size:
                                Typically 1 ounce.<br /> Characteristics: Bold and intense flavor with
                                a thick crema.<br /> Price: $12.00
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Coffee Card 2 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee2.avif" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Americano</Card.Title>
                            <Card.Text>
                                Description: Espresso shots diluted with hot water.<br /> Serving
                                Size: Varies, often around 8-12 ounces.<br /> Characteristics: Similar
                                strength to drip coffee but smoother.<br /> Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Coffee Card 3 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee3.webp" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Macchiato</Card.Title>
                            <Card.Text>
                                Description: Espresso with a small amount of steamed milk.<br />
                                Serving Size: Usually around 2 ounces.<br /> Characteristics: Strong
                                espresso flavor with a touch of creaminess. <br />Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Coffee Card 4 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee4.jpg" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Latte</Card.Title>
                            <Card.Text>
                                Description: Espresso with a larger amount of steamed milk and a
                                thin layer of foam.<br /> Serving Size: Often 8-12 ounces.<br />
                                Characteristics: Creamy and milder than a cappuccino. <br />
                                Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Coffee Card 5 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee5.jpg" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Mocha</Card.Title>
                            <Card.Text>
                                Description: Latte with chocolate syrup or cocoa powder.<br /> Serving
                                Size: Varies, often 8-16 ounces.<br /> Characteristics: Sweet and
                                chocolatey with espresso and milk.<br /> Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Coffee Card 6 */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="coffee6.avif" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Affogato</Card.Title>
                            <Card.Text>
                                Description: Vanilla ice cream "drowned" with a shot of hot
                                espresso.<br /> Serving Size: Typically a dessert-sized portion.<br />
                                Characteristics: A delightful combination of hot and cold,
                                bitter and sweet. <br />Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Special Menu Section */}
                <div className="col-md-12">
                    <h1 className="specialMenu-heading">Our Special Menu</h1>
                </div>

                {/* Green Tea Card */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="green.jpg" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Green Tea</Card.Title>
                            <Card.Text>
                                Description: A traditional green tea made from high-quality Camellia sinensis leaves and buds.<br /> Serving
                                Size: Varies, often 8-16 ounces. <br />Characteristics: Sweet and
                                minty.<br /> Price: $12.33
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Strawberry Frappe Card */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="strawberry.jpg" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Strawberry Frappe</Card.Title>
                            <Card.Text>
                                Description: A refreshing and indulgent blended beverage made with fresh strawberries, ice, and a creamy base.<br /> Serving
                                Size: Varies, often served in a 16-ounce cup.<br /> Characteristics: Sweet and fruity with a smooth and creamy texture.<br />
                                Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Banana Smoothie Card */}
                <div className="col-md-4 py-3 py-md-0 mt-3">
                    <Card className="coffee-card">
                        <Card.Img variant="top" src="banana.avif" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Banana Smoothie</Card.Title>
                            <Card.Text>
                                Description: A delicious and nutritious smoothie made with ripe bananas, yogurt, and a hint of honey.<br /> Serving
                                Size:Typically served in a 16-ounce cup.<br /> Characteristics: Creamy, naturally sweet, and packed with potassium.<br /> Price: $X.XX
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Menu;