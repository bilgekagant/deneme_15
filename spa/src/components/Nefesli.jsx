import Container from 'react-bootstrap/esm/Container';



const Cardd = () => {
    return(
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
              Ney
            </div>
            <a href="#ney"><img class="card-img" src="Ney-Nedir--Ozellikleri-ve-Kisaca-Anlatim-322b.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Flüt
            </div>
            <a href="#flut"><img class="card-img" src="pexels-charles-parker-6647435.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Klarnet
            </div>
            <a href="#klarnet"><img class="card-img" src="pexels-cojanu-alexandru-9202266.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
             Trompet
            </div>
            <a href="#trompet"><img class="card-img" src="pexels-kendall-hoopes-2261954.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Trombon
            </div>
            <a href="#trombon"><img class="card-img" src="pexels-klub-boks-14855750.jpg" alt="Card image"/></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
          <div class="card bg-dark text-white">
            <div class="card-header mx-auto">
            Saksafon
            </div>
            <a href="#saksafon"><img class="card-img" src="pexels-pixabay-45243.jpg" alt="Card image"/></a>
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

          <Container className='row vurmaliElements mx-auto' id='ney'>
            <h2>Ney Markalarımız</h2>
              <ul className='col-lg-6 markalar'>
                <li>İmece </li>
                <li>Herdem </li>
                <li>Donizetti </li>
              </ul>
              <p className='col-lg-6 instrument-text'>Ney, üflemeli çalgıdır. Kaşgarlı Mahmut, Divân-ı Lügati't-Türk adlı Türk kültür ve dilini anlatan eserinde, sagu denilen, "erler" için düzenlenen, ölüm, erdem ve acıları anlatan törenlerde kullanıldığını aktarmıştır. "Ney", yakın zamanlarda Farsçaya geçmiş olup nâ veya nay adını almıştır.</p>
              <img class="vurmaliImg" src="Ney-Nedir--Ozellikleri-ve-Kisaca-Anlatim-322b.jpg" alt="Card image"/>

          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='flut'>
            <h2>Flüt Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>LİNO </li>
                <li>Helvacıoğlu</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Flüt nefesli grubundaki müzik aletileri ailesidir. Kamışlı nefesli çalgıların aksine flüt sesini bir açıklık boyunca hava akışından çıkaran bir aerofon veya kamışsız nefesli çalgıdır. Hornbostel – Sachs alet sınıflandırmasına göre oluklar kenardan üflemeli aerofonlar olarak sınıflandırılır.</p>
              <img class="vurmaliImg" src="pexels-charles-parker-6647435.jpg" alt="Card image"/>
          </Container>
          <br></br>

          <Container className='row vurmaliElements mx-auto' id='klarnet'>
            <h2>Klarnet Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Amati</li>
                <li>Cremonia</li>
                <li>Bohemia</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Klarnet, sert ve dayanıklı ağaçlardan genellikle de abanoz ağacından yapılan üflemeli bir çalgı türüdür. Bir çeşit sert kauçuk olan ebonitten, ayrıca metalden yapılanları da vardır.</p>
              <img class="vurmaliImg" src="pexels-cojanu-alexandru-9202266.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='trompet'>
            <h2>Trompet Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Yamaha</li>
                <li>siksok</li>
                <li>a3131</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Trompet, bir ağızlık ve kendi üstüne kıvrılmış silindir bir borudan oluşan nefesli çalgıdır. Aerophone sınıfına ait bir bakır üflemelidir.</p>
              <img class="vurmaliImg" src="pexels-kendall-hoopes-2261954.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='trombon'>
            <h2>Trombon Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Bach </li>
                <li>Fox </li>
                <li>Trevor James</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Trombon, üflemeli ve bakır nefesli çalgılar grubunda bulunan bir çalgı çeşididir. Fincan biçimli bir ağızlığa dayanan dudakların titreşmesiyle ses çıkarmaktadır. Boru uzunluğunu değiştiren ve "kulis" adı verilen bir sürgüsü vardır. Bu sürgü trombonun farklı notalarda ses çıkarabilmesini sağlar.</p>
              <img class="vurmaliImg" src="pexels-klub-boks-14855750.jpg" alt="Card image"/>
          </Container>
          <br></br>
          <Container className='row vurmaliElements mx-auto' id='saksafon'>
            <h2>Saksafon Markalarımız</h2>
              <ul className='col-lg-6'>
                <li>Franck Bichon</li>
                <li>Roy Benson</li>
                <li>Yamaha</li>
              </ul>
              <p className='col-lg-6 instrument-text'>Saksofon veya saksafon, çoğunlukla koni ve “S” biçiminde pirinçten üretilen, ağzındaki kamış vasıtasıyla ses çıkaran bir çalgıdır. 1840’lı yıllarda, Adolphe Sax tarafından tasarlanmıştır.</p>
              <img class="vurmaliImg" src="pexels-pixabay-45243.jpg" alt="Card image"/>
          </Container>


        </div>
    )
}