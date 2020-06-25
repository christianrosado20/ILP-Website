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
                    <div className="Section__Two__Card"><h3 className="Section__Two__Title">About</h3></div>
                    <h2 className="Section__Two__Text">The Industrial Liaison Program of the University of Puerto Rico Mayagüez provides a platform for students, professors and companies that fosters mutually beneficial collaborations involving research, education, and community.  The program provides support to the hundreds of companies that give and work jointly to strengthen the university antes, ahora, y siempre.</h2>
                    
                </div>
                
        
            </Container>
    )
}

export default Landing;