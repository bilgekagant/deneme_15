import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Bateri
            </div>
            <img class="card-img" src="pexels-josh-sorenson-995301.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Bendir
            </div>
            <img class="card-img" src="4.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Bongo
            </div>
            <img class="card-img" src="pexels-skynig-photography-9488150.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Marimba
            </div>
            <img class="card-img" src="Marimba.webp" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Üçgen Zil
            </div>
            <img class="card-img" src="il_570xN.3428363159_jdg6.webp" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Davul
            </div>
            <img class="card-img" src="akp-li-belediye-ramazan-davulunu-yasakladi-997671-5.jpg" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Vurmalı() {
    return (
        <div>
            <h1 className='mx-auto'>Vurmalı</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}