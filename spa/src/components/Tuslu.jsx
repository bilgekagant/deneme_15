import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Org
            </div>
            <img class="card-img" src="org-muzik.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Kilise Orgu
            </div>
            <img class="card-img" src="pexels-tim-gouw-250695.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Synthe­si­zer
            </div>
            <img class="card-img" src="synths-9.6.2016.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Akordeon
            </div>
            <img class="card-img" src="pexels-pixabay-163823.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Piyano
            </div>
            <img class="card-img" src="pexels-pixabay-164743.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Keytar
            </div>
            <img class="card-img" src="FRMYBW0JDOUWRMX.webp" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Tuslu() {
    return (
        <div>
            <h1 className='mx-auto'class="instrument-pages-header">Tuşlu</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}