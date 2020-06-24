import React from 'react';
import  { Container, Jumbotron, Carousel }  from 'react-bootstrap';
import './style.scss';

const Landing = () => {
    return (
            <Container>
                <Jumbotron className="Jumbotron">
                    <div className="Jumbotron__Overlay"></div>
                    <div className="Jumbotron__Head">
                        <h1 className="Head__Title">
                        Industrial Liaison Program
                        </h1>
                    </div>
                </Jumbotron>
                <Carousel className="Jumbotron__Add__On">
                    <Carousel.Item>
                        <h1 className="Carousel__First">UPRM Creates new program focused on student development</h1>
                    </Carousel.Item>
                </Carousel>
                <div className="Section__Two">
                    <h3 className="Section__Two__Title">What are we after?</h3>
                </div>
                
        
            </Container>
    )
}

export default Landing;