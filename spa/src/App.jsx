import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Services from './components/Services'
import Vurmali from './components/Vurmali'
import ContactUs from './components/ContactUs';
import Telli from './components/Telli';
import Yayli from './components/Yayli';
import Nefesli from './components/Nefesli';
import Tuslu from './components/Tuslu';



function App() {
  

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/vurmali' element={<Vurmali/>} />
              <Route path='/telli' element={<Telli/>} />
              <Route path='/nefesli' element={<Nefesli/>} />
              <Route path='/tuslu' element={<Tuslu/>} />
              <Route path='/yayli' element={<Yayli/>} />
              <Route path='/contactus' element={<ContactUs/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      
      
    </div>
  )
}

export default App
