import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Searchbar from './components/Searchbar'

import Homescreen from './screens/Homescreen'//SE IMPORTA EL MODELO HOMESCREEN, EL CUAL CONTIENE LAS CARDS QUE MUESTRAN LA INFORMACIÓN DE LOS PRODUCTOS
import Productscreen from './screens/Productscreen'
import './App.css';


import {BrowserRouter as Router,Route, Routes} from 'react-router-dom' 
//no terminada aun
export default function App() {
  return (
    <Router><div className="App"> 
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container"> 
          <a className="navbar-brand" href="" ><img src="https://raw.githubusercontent.com/metodosformalesds/MFDS_2022_T2_Code/main/LogoVetPet.png" width="100px"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-rg-0">
              <li className="nav-item">
                <a className="nav-link activate Tcolor " aria-current="page" href="https://salmon-cliff-086826110.2.azurestaticapps.net/">Veterinarias</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link activate Tcolor li.active color" aria-current="page" href="/">E-Commerce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link activate Tcolor navbar-nav" aria-current="page" href="/">Adopción</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2 activate btn-outline-warning" type="search" placeholder="Categoria" aria-label="Search" color='#a10e0e'/>
                <button type="button" className="btn btn-outline-warning">Buscar</button>
            </form>
          </div>
        </div>
        
      </nav>
        <div className="p-5"></div>
        <div className='p-5'>
          <main className="py-3">
            <Container>
              <Routes>
          <Route path='/' element={<Homescreen/>} exact/>
          <Route path='/product/:id' element={<Productscreen/>}/></Routes>
          </Container>
          </main>
          </div>
    </div></Router>
    
  );
}

