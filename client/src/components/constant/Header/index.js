import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.scss';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="Header__navbar">
            <Navbar.Brand>
                <Link to='/' className="Header__home">UPRM ILP</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Nav.Link>
                    <Link to='/students' className="Header__links">Students</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/faculty' className="Header__links">Faculty</Link>
                </Nav.Link> 
                <Nav.Link>
                    <Link to='/companies' className="Header__links">Companies</Link>
                </Nav.Link>     
                <Nav.Link>
                    <Link to='/contact' className="Header__links">Contact</Link>
                </Nav.Link>      
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;