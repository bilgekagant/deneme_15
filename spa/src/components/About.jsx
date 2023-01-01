import React, { Component } from "react";
import Layout from "./Layout";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";

export default function About(){
    
  return(

    <div>
      <Container className=" aboutUs fluid">
        <h1>About Us!</h1>
        <p>Some text asşfokasdf</p>
      </Container>
      <h2>Our Team</h2>
      <Container>

        <div className="row">
          <Col className="aboutUs">
            <img src="" alt=""/>
            <Container>
              <h2>Bilgekağan</h2>
              <p>CEO</p>
              <Button>Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            <img src="" alt=""/>
            <Container>
              <h2>Bilgekağan</h2>
              <p>CEO</p>
              <Button>Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            <img src="" alt=""/>
            <Container>
              <h2>Bilgekağan</h2>
              <p>CEO</p>
              <Button>Contact</Button>
            </Container>
          </Col>
        </div>
      </Container>
      

    </div>

    

  );
    
}

