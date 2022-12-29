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
            Telli Çalgılar
          </div>
          <img class="card-img" src="corosuel_1.jpeg" alt="Card image"/>
          <Link to="/telli">
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
          <img class="card-img" src="corosuel_2.jpeg" alt="Card image"/>
          <Link to="/vurmali">
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
          <img class="card-img" src="corosuel_2.jpeg" alt="Card image"/>
          <Link to="/nefesli">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Tuşlu Çalgılar
          </div>
          <img class="card-img" src="corosuel_2.jpeg" alt="Card image"/>
          <Link to="/nefesli">
            <div class="card-img-overlay">
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
        <div class="card bg-dark text-white">
          <div class="card-header mx-auto">
            Yaylı Çalgılar
          </div>
          <img class="card-img" src="corosuel_2.jpeg" alt="Card image"/>
          <Link to="/nefesli">
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
          src="corosuel_1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="/corosuel_2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="corosuel_1.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
 
