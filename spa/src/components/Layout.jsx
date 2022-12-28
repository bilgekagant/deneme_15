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
              <LinkContainer to={{path : "/home",search: "?sort=name", hash:"#enstruments", state: { fromDashBoard: true}}}><Nav.Link>Enstruments</Nav.Link></LinkContainer> 
              <NavDropdown title="Enstruments" id="basic-nav-dropdown">
                <NavDropdown.Item href="/vurmali">vurmali</NavDropdown.Item>
                <NavDropdown.Item href="/nefesli">
                  nefesli
                </NavDropdown.Item>
                <NavDropdown.Item href="/telli">telli</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="/tuşlu">
                  tuşlu
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          </Container>
        </Navbar>
      

      <br />

      <Outlet />
      </div>
    );
  }