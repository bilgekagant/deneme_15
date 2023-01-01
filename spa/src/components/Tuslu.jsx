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
              Org
            </div>
            <a href='#org'><img class="card-img" src="org-muzik.jpg" alt="Card image"/></a>
            
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Kilise Orgu
            </div>
            <a href='#kilise'><img class="card-img" src="pexels-tim-gouw-250695.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Synthe­si­zer
            </div>
            <a href='#synthesizer'><img class="card-img" src="synths-9.6.2016.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Akordeon
            </div>
            <a href='#akordeon'><img class="card-img" src="pexels-pixabay-163823.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Piyano
            </div>
            <a href='#piyano'><img class="card-img" src="pexels-pixabay-164743.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Keytar
            </div>
            <a href='#keytar'><img class="card-img" src="FRMYBW0JDOUWRMX.webp" alt="Card image"/></a>
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


            <Container className='row vurmaliElements' id='org'>
            <h2>Org Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Hammond</li>
                <li>Casio</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Müzikte, org, her biri kendi el kitabından, ellerle veya ayaklarla pedallı tahta ile çalınan tonlar üretmek için bir veya daha fazla boru bölümünün veya başka araçların klavyeli bir enstrümanıdır.</p>
              <img class="vurmaliImg" src="org-muzik.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='kilise'>
            <h2>Kilise Orgu Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Hammond</li>
                <li>Roland</li>
                <li>Yamaha</li>
                <li>Phoenix</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Borulu org, körükle verilen basınçlı havanın tahta veya metal borulardan geçerken içerideki hava sütunlarının titreşmesi sayesinde ses üreten bir müzik enstrümanıdır. Klavyeli ve pedallı bir enstrümandır. Değişik ses tonları ve notalar piyanoda olduğu gibi tuşlarla denetlenir. En çok bilinen türü kilise orgudur.</p>
              <img class="vurmaliImg" src="pexels-tim-gouw-250695.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row vurmaliElements' id='synthesizer'>
            <h2>Synthesizer Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Moog Music</li>
                <li>Korg</li>
                <li>Arturia</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Synthesizer farklı türde bir müzik yaratmak ve elektriksel sinyaller üretmek için kullanılan bir müzik aletidir. Üretilen sinyaller bir enstrüman amfisi, hoparlör ya da kulaklık aracılığıyla sese dönüştürülüp duyulur hale gelir.</p>
              <img class="vurmaliImg" src="synths-9.6.2016.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='akordeon'>
            <h2>Akordeon Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Hohner</li>
                <li>Borsini</li>
                <li>Weltmeister</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Akordeon, akordiyon ya da akordion, bir körüğü harekete geçirmekle yaratılan hava akımının etkilediği serbest metal dillerinin titreşmesiyle ses çıkaran havalı çalgıdır. Bir ya da iki kılavuz ile bir körükten oluşan akordiyonda, serbest metal dillerin titreşmesi, klavyenin tuşlarına basmakla sağlanır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-163823.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='piyano'>
            <h2>Piyano Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Steinway & Sons </li>
                <li>Bӧsendorfer</li>
                <li>Blüthner</li>
                <li>Bechstein </li>
                <li>Yamaha </li>
              </ul>
              <p className='col-lg-6 instrument-text'>Piyano, tellere daha yumuşak bir malzeme ile kaplanmış tahta çekiçlerle vurulan telli klavyeli bir enstrümandır. Oyuncunun, çekiçlerin tellere çarpmasını sağlamak için iki elin parmakları ve başparmaklarıyla bastırdığı veya vurduğu bir dizi tuş olan bir klavye kullanılarak oynanır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-164743.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements' id='keytar'>
            <h2>Keytar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Keytar, gitarın kayışla desteklenmesine benzer şekilde, boyun ve omuzların etrafındaki bir kayışla desteklenen hafif bir synthesizer'dır. Keytarlar, sabit sehpalar üzerine yerleştirilen geleneksel klavyelere kıyasla oyunculara sahnede daha geniş bir hareket alanı sağlar.</p>
              <img class="vurmaliImg" src="FRMYBW0JDOUWRMX.webp" alt="Card image"/>
          </Container>


        </div>
    )
}