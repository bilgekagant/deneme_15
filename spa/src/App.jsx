import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Services from './components/Services'
import Vurmali from './components/Vurmali'



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

            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      
      
    </div>
  )
}

export default App
