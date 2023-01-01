import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Keman
            </div>
            <img class="card-img" src="pexels-clem-onojeghuo-111287.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Çello
            </div>
            <img class="card-img" src="pexels-eleazar-ceballos-2032476.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Viyolo
            </div>
            <img class="card-img" src="pexels-pixabay-462447.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Kontrabas
            </div>
            <img class="card-img" src="p1060235sw.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Kemençe
            </div>
            <img class="card-img" src="istockphoto-926748980-170667a.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Viyolonsel
            </div>
            <img class="card-img" src="Viyolonsel_muzik_aleti.jpg" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Yaylı() {
    return (
        <div>
            <h1 className='mx-auto'class="instrument-pages-header">Yaylı</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}