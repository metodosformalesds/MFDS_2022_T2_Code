import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen.js'
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
//no terminada aun
export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg fixed-top  background-color: #264ECA">
        <div className="container"> 
          <a className="navbar-brand activate Tcolor activate Tsize" href="/" >VetPet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-rg-0">
              <li className="nav-item">
                <a className="nav-link activate Tcolor" aria-current="page" href="/">Veterinarias</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link activate Tcolor" aria-current="page" href="/">E-Commerce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link activate Tcolor" aria-current="page" href="/">Adopción</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" color='#FFC107'/>
                <button type="button" class="btn btn-outline-warning">Buscar</button>
            </form>
          </div>
          
        </div>
        
      </nav>
      <div>
</div>
    <BrowserRouter>
      
    </BrowserRouter>
    <Container><Homescreen></Homescreen></Container>
          
        
    </div>
  );
}

