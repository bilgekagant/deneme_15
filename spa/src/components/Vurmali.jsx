import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'


const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Bateri
            </div>
            <a href='#bateri'>
              <img class="card-img" src="pexels-josh-sorenson-995301.jpg" alt="Card image"/>
            </a>
            
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Bendir
            </div>
            <a href='#bendir'>
              <img class="card-img" src="4.jpg" alt="Card image"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Bongo
            </div>
            <a href='#bongo'>
              <img class="card-img" src="pexels-skynig-photography-9488150.jpg" alt="Card image"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Marimba
            </div>
            <a href='#marimba'>
              <img class="card-img" src="Marimba.webp" alt="Card image"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Üçgen Zil
            </div>
            <a href='#ucgenZil'>
              <img class="card-img" src="il_570xN.3428363159_jdg6.webp" alt="Card image"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Davul
            </div>
            <a href='#davul'>
              <img class="card-img" src="akp-li-belediye-ramazan-davulunu-yasakladi-997671-5.jpg" alt="Card image"/>
            </a>
          </div>
        </div>
      </div>
      
  
    );
  }


export default function Vurmalı() {
    return (
        <div>
            <h1 className='mx-auto'class="instrument-pages-header">Vurmalı</h1>
            <div className="d-flex flex-row">
                <div className="p-2 position-relative"><Cardd/></div>
            </div>

          <Container className='row vurmaliElements mx-auto' id='bateri'>
            <h2>Bateri Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Yamaha</li>
                <li>Ludwig</li>
                <li>Stagg</li>
                <li>Extreme</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Bateri, davullar ve ziller başta olmak üzere vurmalı çalgılardan oluşan bir müzik enstrümanıdır. Şarkılarda ritim tutmaya yarar. Fransızcadan Türkçeye geçmiş bir kelimedir. Türkçede "bateri" yerine "davul", "davul seti" ve "davul kiti" terimleri de kullanılır.</p>
              <img class="vurmaliImg" src="pexels-josh-sorenson-995301.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='bendir'>
            <h2>Bendir Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Gold Falez</li>
                <li>Wooden Gold</li>
                <li>Kuzey Dizayn</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Bendir, Klasik Türk müziğinde ve özellikle Mevlevi Türk Tasavvuf Musikisinde daire veya def adıyla bilinen vurmalı çalgının Mağrip ülkelerine (özellikle Fas ve Cezayir'e) özgü biçimidir. Mağrip Arapçasından alınan bendir adı Türkiye'de 1980'lerden sonra yaygın kullanıma kavuşmuştur.</p>
              <img class="vurmaliImg" src="4.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row vurmaliElements mx-auto' id='bongo'>
            <h2>Bongo Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>DADI</li>
                <li>Nino</li>
                <li>Tycoon</li>
                <li>Sonor</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Bongo, bir vurmalı çalgı türüdür. Güney Amerika ve Afrika doğumlu olan bongo, Küba müziğinde 19. yüzyıldan sonra görüldü. 1940'larda yapılan metal türler daha sonra geliştirildi.</p>
              <img class="vurmaliImg" src="pexels-skynig-photography-9488150.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='marimba'>
            <h2>Marimba Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Majestic </li>
                <li>Adams Academy</li>
                <li>Musser</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Marimba, vurma çalgılar ailesinden tuşlu bir çalgıdır. Genellikle tahtadan yapılma olan tuşlara malletlerle vurularak ses elde edilir. 4 1/3 - 5 1/2 oktav ses alanına sahiptir. Tuşlar piyanodaki gibi düzenlenmiştir. Kromatik marimba Güney Meksika ve Kuzey Guatemala'daki diatonic marimbadan türedi.</p>
              <img class="vurmaliImg" src="Marimba.webp" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='ucgenZil'>
            <h2>Üçgen Zil Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Yamaha</li>
                <li>Chukwagon </li>
              </ul>
              <p className='col-lg-6 instrument-text'>Bu üçgen çalgı üstündeki köşede ilmik yapılmış bir çeşit katgut, ip veya tel ile havada tutulabilir. Genellikle kısa bir metal değnek şeklinde tokmak ile vurularak çalınır. Bir vuruş yüksek, tiz tınlayan bir zil çalar notası verir. İstenirse bu tınlama çalgı üzerine elle dokunularak kontrol edilebilir.</p>
              <img class="vurmaliImg" src="il_570xN.3428363159_jdg6.webp" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='davul'>
            <h2>Davul Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>Ashton</li>
                <li>Tama</li>
                <li>Jinbao</li>
                <li>Yamaha</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Davul, bilinen en eski vurmalı çalgılardan biridir. Ahşap, maden ya da pişmiş topraktan silindirik bir gövdeye gerilen deriden oluşur. El ya da sopayla çalınır. Biçimi değişse de dünyanın her yerinde ve her toplumda kullanılan bir çalgıdır. Türkçede davulun diğer adları; köbürge, küvgür, tuğ, tavul, tabıl dır.</p>
              <img class="vurmaliImg" src="akp-li-belediye-ramazan-davulunu-yasakladi-997671-5.jpg" alt="Card image"/>
          </Container>


        </div>
    )
}