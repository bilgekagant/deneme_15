import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cardd = () => {
  return(
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Vurmalı Çalgılar
          </div>
          <img class="card-img" src="pexels-josh-sorenson-995301.jpg" alt="Card image"/>
          <Link to="/vurmali">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Nefesli Çalgılar
          </div>
          <img class="card-img" src="pexels-teddy-yang-2254140.jpg" alt="Card image"/>
          <Link to="/nefesli">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Telli Çalgılar
          </div>
          <img class="card-img" src="pexels-yabee-eusebio-1656066.jpg" alt="Card image"/>
          <Link to="/telli">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Yaylı Çalgılar
          </div>
          <img class="card-img" src="pexels-ylanite-koppens-697672.jpg" alt="Card image"/>
          <Link to="/yayli">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Tuşlu Çalgılar
          </div>
          <img class="card-img" src="pexels-bryan-geraldo-586415.jpg" alt="Card image"/>
          <Link to="/tuslu">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
    </div>
    

  );
}



const Corousel = () => {
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="pexels-vishnu-r-nair-1105666.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Müziği yakalayın.</h3>
          <p>Çeşitli enstrümanlarımızla müzik kariyerinizi başlatın.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="pexels-mark-angelo-sampan-1587927.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Müzik aletiniz mi bozuldu?</h3>
          <p>Getirin tamir edelim, aynı gün içinde teslim alın.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="pexels-athena-1778810.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bir grubunuz mu var?</h3>
          <p>
            Gelin reklamınızı yapalım, hayallerinizdeki üne kavuşun.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


export default function Home()  {
  {
    return (
      <div>
        
        
        <div id="crsl" className="container"><Corousel/></div>
        <h2>Agalar music olarak her zaman en iyi hizmeti size sunmaya özen gösteriyoruz.</h2>
        <section id="enstruments">
          <div className="d-flex flex-row">
            <div className="p-2 position-relative"><Cardd/></div>
          </div>
        </section>

        <section id="contact">
          <p>
            Neler mi Yapıyoruz?
          
          </p>
          
        </section>

        
        
      </div>
    );
  }
}
 
