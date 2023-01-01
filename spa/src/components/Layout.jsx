import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer, HashLink} from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Layout() {
    return (
    <div>
      <Navbar bg="dark" variant="dark" expand= "lg">
        <Container>
          <img className="navbarIcon" src="icons8-music-store-64.png"/>
          <Navbar.Brand href="/home">agalarMusic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer> 
              <LinkContainer to="/about"><Nav.Link>About Us</Nav.Link></LinkContainer> 
              <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>  
              <NavDropdown title="Instruments" id="basic-nav-dropdown">
                <LinkContainer to="/vurmali" id="vurmali1"><NavDropdown.Item>Vurmalı</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/nefesli"><NavDropdown.Item>Nefesli</NavDropdown.Item></LinkContainer> 
                <LinkContainer to="/telli"><NavDropdown.Item>Telli</NavDropdown.Item></LinkContainer> 
                <LinkContainer to="/yayli"><NavDropdown.Item>Yaylı</NavDropdown.Item></LinkContainer> 
                <LinkContainer to="/tuslu"><NavDropdown.Item>Tuşlu</NavDropdown.Item></LinkContainer>
              </NavDropdown>
              <LinkContainer to="/contactus"><Nav.Link>ContactUs</Nav.Link></LinkContainer> 
            </Nav>
          </Navbar.Collapse>

          </Container>
        </Navbar>
      

      <br />

      <Outlet />
      </div>
    );
  }