import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
  


export default function About(){
    
  return(

    <div>
      <Container className=" aboutUs mx-auto">
        <h1>About Us!</h1>
        <p>Some text asşfokasdf</p>
      </Container>
      <br></br>

      <Container>
        <h2>Our Team</h2>
        <div className="row">
          
          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block">Bilgekağan Taş</h2>
              <img className="w-75 d-block mx-auto" src="/public/WhatsApp Görsel 2023-01-02 saat 01.07.33.jpg" alt=""/>
              <p className="text-center">Satış Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block">Buğrahan Utku Akdoğan</h2>
              <img className="w-75 d-block mx-auto" src="/public\WhatsApp Görsel 2023-01-02 saat 01.07.57.jpg" alt=""/>
              <p className="text-center">Bakım/Onarım Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block">Alper Baş</h2>
              <img className="w-75 d-block mx-auto" src="/public\WhatsApp Görsel 2023-01-02 saat 01.40.58.jpg" alt=""/>
              <p className="text-center">Kariyer Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>
        </div>
      </Container>
      

    </div>

    

  );
    
}

