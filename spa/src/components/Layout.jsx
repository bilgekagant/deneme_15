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
              <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer> 
              <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>  
              <NavDropdown title="Enstruments" id="basic-nav-dropdown">
                <LinkContainer to="/vurmali"><NavDropdown.Item>vurmali</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/nefesli"><NavDropdown.Item>nefesli</NavDropdown.Item></LinkContainer> 
                <LinkContainer to="/telli"><NavDropdown.Item>telli</NavDropdown.Item></LinkContainer> 

                <LinkContainer to="/tuslu"><NavDropdown.Item>tuşlu</NavDropdown.Item></LinkContainer>
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