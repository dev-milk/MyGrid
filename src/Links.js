import React from "react";
import { 
  Navbar, 
  Nav,
  Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";


const Links = () => {

  return (
    <>
      <div >
      <Navbar bg="dark" variant="dark" >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>HOME</Navbar.Brand>
          </LinkContainer>
         
          <Nav className="me-auto">
            <LinkContainer to="/Works">
            <Nav.Link >Works</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
            <Nav.Link >About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default Links