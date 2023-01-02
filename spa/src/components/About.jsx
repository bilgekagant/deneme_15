import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
  


export default function About(){
    
  return(

    <div>
      <Container className="aboutUs mx-auto">
        <h1 className="text-center">About Us!</h1>
        <p className="text-center">Uzmanlarımızla tanışın! Size en iyi hizmeti verebilmek için alanında en yetkin kişilerle çalışıyoruz.</p>
      </Container>
      <br></br>

      <Container>
        <h2 className="aboutus-h2">Our Team</h2>
        <div className="row">
          {/* DOM da bütün kartları görebileceğimiz container */}
          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block aboutus-text">Bilgekağan Taş</h2>
              <img className="w-75 d-block mx-auto team-img" src="/public/WhatsApp Görsel 2023-01-02 saat 01.07.33.jpg" alt=""/>
              <p className="text-center aboutus-text">Satış Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block aboutus-text">Buğrahan Utku Akdoğan</h2>
              <img className="w-75 d-block mx-auto team-img" src="/public\WhatsApp Görsel 2023-01-02 saat 01.07.57.jpg" alt=""/>
              <p className="text-center aboutus-text">Bakım/Onarım Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>

          <Col className="aboutUs">
            
            <Container>
              <h2 className="mx-auto d-block aboutus-text">Alper Baş</h2>
              <img className="w-75 d-block mx-auto team-img" src="/public\WhatsApp Görsel 2023-01-02 saat 01.40.58.jpg" alt=""/>
              <p className="text-center aboutus-text">Kariyer Uzmanı</p>
              <Button className="mx-auto d-block">Contact</Button>
            </Container>
          </Col>
        </div>
      </Container>
      

    </div>

    

  );
    
}

