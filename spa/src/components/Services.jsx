import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Onarım
            </div>
            <img class="card-img" src="Repair1_compressed.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Bakım
            </div>
            <img class="card-img" src="Blog_Banner_1212x400_4_702104d6-fb80-4cd5-be9c-bfc5a55ffe46_1200x1200.webp" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Satış
            </div>
            <img class="card-img" src="IMG_6907.jpg" alt="Card image"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Kariyer Desteği
            </div>
            <img class="card-img" src="pexels-david-yu-1749822.jpg" alt="Card image"/>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Services() {
    return (
        <div>
            <h1 className='mx-auto'class="instrument-pages-header">Servislerimiz</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>
        </div>
    )
}