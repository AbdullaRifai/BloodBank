import React from 'react';
import './Header.scss';
import {Nav, Col, Row, Container} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
    <Nav defaultActiveKey="/home" className="justify-content-end" as="ul">
        <Container>
            <Col>
                <Row>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Row>
                <Row>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Row>
                <Row>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Row>
            </Col>
        </Container>
    </Nav> 
        </div>
    )
}

  
  export default Header;