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


            <Container className='row tusluElements' id='org'>
            <h2>Org Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Bateri, davullar ve ziller başta olmak üzere vurmalı çalgılardan oluşan bir müzik enstrümanıdır. Şarkılarda ritim tutmaya yarar. Fransızcadan Türkçeye geçmiş bir kelimedir. Türkçede "bateri" yerine "davul", "davul seti" ve "davul kiti" terimleri de kullanılır.</p>
              <img class="vurmaliImg" src="pexels-josh-sorenson-995301.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row tusluElements' id='kilise'>
            <h2>Kilise Orgu Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Bendir, Klasik Türk müziğinde ve özellikle Mevlevi Türk Tasavvuf Musikisinde daire veya def adıyla bilinen vurmalı çalgının Mağrip ülkelerine (özellikle Fas ve Cezayir'e) özgü biçimidir. Mağrip Arapçasından alınan bendir adı Türkiye'de 1980'lerden sonra yaygın kullanıma kavuşmuştur.</p>
              <img class="vurmaliImg" src="4.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row tusluElements' id='synthesizer'>
            <h2>Synthesizer Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Bongo, bir vurmalı çalgı türüdür. Güney Amerika ve Afrika doğumlu olan bongo, Küba müziğinde 19. yüzyıldan sonra görüldü. 1940'larda yapılan metal türler daha sonra geliştirildi.</p>
              <img class="vurmaliImg" src="pexels-skynig-photography-9488150.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row tusluElements' id='akordeon'>
            <h2>Akordeon Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Marimba, vurma çalgılar ailesinden tuşlu bir çalgıdır. Genellikle tahtadan yapılma olan tuşlara malletlerle vurularak ses elde edilir. 4 1/3 - 5 1/2 oktav ses alanına sahiptir. Tuşlar piyanodaki gibi düzenlenmiştir. Kromatik marimba Güney Meksika ve Kuzey Guatemala'daki diatonic marimbadan türedi.</p>
              <img class="vurmaliImg" src="Marimba.webp" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row tusluElements' id='piyano'>
            <h2>Piyano Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Bu üçgen çalgı üstündeki köşede ilmik yapılmış bir çeşit katgut, ip veya tel ile havada tutulabilir. Genellikle kısa bir metal değnek şeklinde tokmak ile vurularak çalınır. Bir vuruş yüksek, tiz tınlayan bir zil çalar notası verir. İstenirse bu tınlama çalgı üzerine elle dokunularak kontrol edilebilir.</p>
              <img class="vurmaliImg" src="il_570xN.3428363159_jdg6.webp" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row tusluElements' id='keytar'>
            <h2>Keytar Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6'>Davul, bilinen en eski vurmalı çalgılardan biridir. Ahşap, maden ya da pişmiş topraktan silindirik bir gövdeye gerilen deriden oluşur. El ya da sopayla çalınır. Biçimi değişse de dünyanın her yerinde ve her toplumda kullanılan bir çalgıdır. Türkçede davulun diğer adları; köbürge, küvgür, tuğ, tavul, tabıl dır.</p>
              <img class="vurmaliImg" src="akp-li-belediye-ramazan-davulunu-yasakladi-997671-5.jpg" alt="Card image"/>
          </Container>


        </div>
    )
}