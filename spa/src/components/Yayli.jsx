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
              Keman
            </div>
            <a href="#keman"><img class="card-img" src="pexels-clem-onojeghuo-111287.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Çello
            </div>
            <a href="#cello"><img class="card-img" src="pexels-eleazar-ceballos-2032476.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Viyolo
            </div>
            <a href="#viyolo"><img class="card-img" src="pexels-pixabay-462447.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Kontrabas
            </div>
            <a href="#kontrabas"><img class="card-img" src="p1060235sw.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Kemençe
            </div>
            <a href="#kemence"><img class="card-img" src="istockphoto-926748980-170667a.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Viyolonsel
            </div>
            <a href="#viyolonsel"><img class="card-img" src="Viyolonsel_muzik_aleti.jpg" alt="Card image"/></a>
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
            <Container className='row vurmaliElements mx-auto' id='keman'>
            <h2>Keman Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Ashton</li>
                <li>Fenix</li>
                <li>Mavis</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Keman, viyola ve viyolonselin de bulunduğu violin ailesinin en yüksek tondan çalan, en küçük üyesidir. Dört teli vardır. Akort sesleri pesten tize sol, re, la ve mi'dir. Keman yayına arşe denir. Arşede yapay ya da gerçek at kılının yanı sıra ham misina olarak adlandırılan bir madde de kullanılabilir.</p>
              <img class="vurmaliImg" src="pexels-clem-onojeghuo-111287.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='cello'>
            <h2>Çello Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Stentor</li>
                <li>Tonal</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Viyolonsel ya da çello yaylı çalgıların bir türüdür. Viyolonsel, yaylı ailesinden dört telli ve tenor sesli bir çalgıdır.</p>
              <img class="vurmaliImg" src="pexels-eleazar-ceballos-2032476.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row vurmaliElements mx-auto' id='viyolo'>
            <h2>Viyolo Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Carlovy </li>
                <li>Dominguez </li>
                <li>Picaldi </li>
              </ul>
              <p className='col-lg-6 instrument-text'>Viyola, yaylı çalgılar ailesinin ikinci üyesidir ve şekli kemana benzemekle beraber kemandan biraz daha büyüktür. Alto' da denir. Fiziki yapısı kemana çok benzer. Keman ailesi müzik aletlerinde orta sese sahiptir ve keman ile çello arasında yer alır. Gövde uzunluğu 41 – 45 cm civarındadır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-462447.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='kontrabas'>
            <h2>Kontrabas Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Mavis</li>
                <li>Stentor</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Kontrbas, keman ailesinden, yaylılar grubunun en kalın sesli çalgısıdır. 4 telli ve 5 telli olmak üzere iki türü bulunur. 5 telli olan kontrbasa senfonik orkestra eserlerinin icrasında sık olarak ihtiyaç duyulmaktadır. Kontrbasın, özel bir tür çelikten yapılmış dört teli vardır. </p>
              <img class="vurmaliImg" src="p1060235sw.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='kemence'>
            <h2>Kemençe Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Dest</li>
                <li>Masterwork</li>
                <li>Ramin</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Kemençe veya Lyra, Doğu Akdeniz'de, özellikle Ermenistan, Yunanistan, İran, Türkiye ve Azerbaycan'da ortaya çıkan çeşitli yaylı yaylı müzik aletleri için kullanılan bir isimdir.</p>
              <img class="vurmaliImg" src="istockphoto-926748980-170667a.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='viyolonsel'>
            <h2>Viyolonsel Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>Stentor</li>
                <li>Rösler</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Viyolonsel ya da çello yaylı çalgıların bir türüdür. Viyolonsel, yaylı ailesinden dört telli ve tenor sesli bir çalgıdır. </p>
              <img class="vurmaliImg" src="Viyolonsel_muzik_aleti.jpg" alt="Card image"/>
          </Container>
        </div>
    )
}