import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Ney
            </div>
            <img class="card-img" src="Ney-Nedir--Ozellikleri-ve-Kisaca-Anlatim-322b.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Flüt
            </div>
            <img class="card-img" src="pexels-charles-parker-6647435.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Klarnet
            </div>
            <img class="card-img" src="pexels-cojanu-alexandru-9202266.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Trompet
            </div>
            <img class="card-img" src="pexels-kendall-hoopes-2261954.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Trombon
            </div>
            <img class="card-img" src="pexels-klub-boks-14855750.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Saksafon
            </div>
            <img class="card-img" src="pexels-pixabay-45243.jpg" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Nefesli() {
    return (
        <div>
            <h1 className='mx-auto'class="instrument-pages-header">Nefesli</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}