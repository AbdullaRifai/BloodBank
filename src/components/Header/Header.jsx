import React from 'react';
import './Header.scss';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">BloodBank</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Nav.Link> About us </Nav.Link>
  </Navbar>
        </div>
    )
}

  
  export default Header;