import React from 'react';
import { Cointaner, Row, Col } from 'react-bootstrap';


export const Layout = (props) => (
    <Container>
        {props.children}
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            </Row>
        <Row>
            <Col>
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
)

export default Layout;