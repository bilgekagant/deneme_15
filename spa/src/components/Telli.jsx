import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Klasik Gitar
            </div>
            <img class="card-img" src="pexels-north-1407322.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Akustik Gitar
            </div>
            <img class="card-img" src="pexels-pixabay-290660.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Elektro Gitar
            </div>
            <img class="card-img" src="pexels-méline-waxx-165971.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Bass Gitar
            </div>
            <img class="card-img" src="pexels-pixabay-35610.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Perdesiz Gitar
            </div>
            <img class="card-img" src="maxresdefault.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            12 Telli Gitar
            </div>
            <img class="card-img" src="qaqXBnqX6H84w4BVVMXzpZ.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Jazz Gitar
            </div>
            <img class="card-img" src="hero-style-jazz-scaled.jpg" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Telli() {
    return (
        <div>
            <h1 className='mx-auto' class="instrument-pages-header">Telli</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}