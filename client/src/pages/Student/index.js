import React from 'react';
import './style.scss';

import { Container, Jumbotron } from 'react-bootstrap';

const Student = () => {
    return (
        <Container>
            <Jumbotron className="Jumbotro">
                <div className="Jumbotron__overlay"></div>
                <div className="Jumbotron__head">
                    <h1 className="Head__title">
                    Students
                    </h1>
                </div>
            </Jumbotron>
            </Container>
    )
}

export default Student;