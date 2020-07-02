import React from 'react';
import  { Container, Jumbotron, Carousel, Row, Col}  from 'react-bootstrap';
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
                    <h1 className="Section__Two__Offer">What we stand for</h1>
                    <div className="Section__Two__Purpose">
                    <Row>
                       <Col><div className="Section__Two__Community">
                           <h1 className="Section__Two__CommunityT">Community</h1>
                           <hr className="Separator"/>
                           </div>
                           <h2 className="Section__Two__Purpose__Text">The ILP is focused on strengthening and growing our community made possible through students, faculty, and companies working together.</h2>
                           </Col>
                       <Col><div className="Section__Two__Community">
                           <h1 className="Section__Two__CommunityT">Connection</h1>
                           <hr className="Separator"/>
                           </div>
                           <h2 className="Section__Two__Purpose__Text">The ILP platform allows for new community connections by finding people with similar interests to engage with in dialog towards building productive collaborations.</h2></Col>
                       <Col><div className="Section__Two__Community">
                           <h1 className="Section__Two__CommunityT">Growth</h1>
                           <hr className="Separator"/></div>
                           <h2 className="Section__Two__Purpose__Text">The ILP platform strongly encourages its members to go beyond their comfort zone to explore new relationships and opportunities enabling growth through expanded horizons.</h2>
                           </Col>
                    </Row>
                    </div>
                </div>
                
        
            </Container>
    )
}

export default Landing;