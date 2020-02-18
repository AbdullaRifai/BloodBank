import React from 'react';
import './Header.scss';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
  <div>
   <Navbar sticky="top" bg="primary" variant="dark" className="main">
    <Navbar.Brand href="#home">BloodBank</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link eventKey="1" href="#home" className="text-white">Home</Nav.Link>
        <Nav.Link eventKey="2" href="#home" className="text-white">Sign up</Nav.Link>
        <Nav.Link eventKey="3" href="#" className="text-white"> About us </Nav.Link>  
      </Nav>
    </Navbar>
    </div>
    )
}

  
  export default Header;