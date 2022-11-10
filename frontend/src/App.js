import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen.js'
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header/>
   <main className='py-5'>
      Veterinary products E-Commerce
      
        <Container>
          <Homescreen></Homescreen>
        </Container>
        
      </main>
     
  <Footer/>
    </div>
    
  );
}

export default App;
