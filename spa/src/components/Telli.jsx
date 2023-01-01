import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Klasik Gitar
            </div>
            <a href="#klasik"><img class="card-img" src="pexels-north-1407322.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Akustik Gitar
            </div>
            <a href="#akustik"><img class="card-img" src="pexels-pixabay-290660.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Elektro Gitar
            </div>
            <a href="#elektro"><img class="card-img" src="pexels-méline-waxx-165971.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Bass Gitar
            </div>
            <a href="#bass"><img class="card-img" src="pexels-pixabay-35610.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Perdesiz Gitar
            </div>
            <a href="#perdesiz"><img class="card-img" src="maxresdefault.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            12 Telli Gitar
            </div>
            <a href="#twelveS"><img class="card-img" src="qaqXBnqX6H84w4BVVMXzpZ.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Jazz Gitar
            </div>
            <a href="#jazz"><img class="card-img" src="hero-style-jazz-scaled.jpg" alt="Card image"/></a>
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
            <Container className='row vurmaliElements' id='klasik'>
            <h2>Klasik Gitar Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Alhambra</li>
                <li>Admira</li>
                <li>Cordoba</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Klasik gitar, klasik müzikte kullanılan gitar ailesinin bir üyesidir. Bağırsak veya naylondan yapılmış telleri olan bu akustik ahşap telli çalgı, metal telleri kullanan akustik ve elektro gitarın öncüsüdür.</p>
              <img class="vurmaliImg" src="pexels-north-1407322.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='akustik'>
            <h2>Akustik Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Takamine</li>
                <li>Martin</li>
                <li>Ovation</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Akustik gitar, görünüş olarak klasik gitara benzeyen fakat tellerin cinsi bakımından klasik gitardan farklı olarak çelik tel kullanılan, belli bir elektronik sisteme gerek duymadan klasik gitara oranla daha yüksek ses çıkarabilen bir gitar türüdür. Amplifikatöre bağlanan elektro akustik gitarlar da vardır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-290660.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row vurmaliElements' id='elektro'>
            <h2>Elektro Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
              <li>Fender</li>
                <li>Ibanez</li>
                <li>Yamaha</li>
                <li>Gibson</li>
                <li>Epiphone</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Elektro gitar veya elektronik gitar, sesini manyetikleri aracılığı ile elektrik akımına dönüştüren ve bir amplifikatör ile bu akımdan ses elde edilmesine olanak tanıyan gitar türüdür.</p>
              <img class="vurmaliImg" src="pexels-méline-waxx-165971.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='bass'>
            <h2>Bass Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Fender</li>
                <li>Ibanez</li>
                <li>Epiphone</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Bas gitar, çoğunlukla dört teli olan ve kalın ses veren telli bir çalgıdır. Günümüz müziğinin vazgeçilmez enstrümanlarından biridir. Bas gitar yoğun olarak Rock, Metal, Caz, Blues, Funk, Punk ve R&B gibi müzik türlerinde kullanılır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-35610.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='perdesiz'>
            <h2>Perdesiz Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Fender</li>
                <li>Epiphone</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Perdesiz gitar, tarihi M.Ö. 5000'lere uzanan perdesiz lavta türü çalgı. Klasik gitar versiyonu, yaptığı müzikte Türk, Arap ve Acem makamlarını caz modlarıyla ve blues dizileriyle harmanlayan Erkan Oğur tarafından 1976'da icat edilmiştir.</p>
              <img class="vurmaliImg" src="maxresdefault.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='twelveS'>
            <h2>12 Telli Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Ibanez</li>
                <li>Cort</li>
              </ul>
              <p className='col-lg-6 instrument-text'>On iki telli bir gitar, standart altı telli bir gitardan daha kalın, daha fazla zil sesi üreten, altı kursta 12 telli bir çelik telli gitardır. Tipik olarak, alttaki dört sıranın telleri oktavlar halinde akort edilir, üstteki iki sıranın telleri ise ahenk içinde akort edilir.</p>
              <img class="vurmaliImg" src="qaqXBnqX6H84w4BVVMXzpZ.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='jazz'>
            <h2>Jazz Gitar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Epiphone</li>
                <li>Ibanez</li>
                <li>Cort</li>
              </ul>
              <p className='col-lg-6 instrument-text'>20. yüzyılın başlarından bu yana büyük bir gelişmeye uğrayan bu gitar türü caz müzisyenlerinin gitarların seslerini yükseltmek için yaptığı ve 1930 yıllarında tasarlandığı bilinmektedir. akustik gitara benzerlerliği ile dikkat çekmektedir. 1940’larda caz gitarlar elektrik ile güçlendirilmiştir.</p>
              <img class="vurmaliImg" src="hero-style-jazz-scaled.jpg" alt="Card image"/>
          </Container>
        </div>
    )
}