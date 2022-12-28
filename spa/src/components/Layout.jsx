import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer, HashLink} from 'react-router-bootstrap';


export default function Layout() {
    return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="navbarIcon" src="icons8-music-store-64.png"/>
          <Navbar.Brand href="/home">agalarMusic</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer> 
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer> 
            <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer> 
            <LinkContainer to={{path : "/home",search: "?sort=name", hash:"#enstruments", state: { fromDashBoard: true}}}><Nav.Link>Enstruments</Nav.Link></LinkContainer> 
          </Nav>
        </Container>
      </Navbar>
      

      <br />

      <Outlet />
      </div>
    );
  }