import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
function Footer() {
  return (
   //Este componente sirve para que dentro de la estructura de la aplicación en app.js se pueda mostrar el pie de página con la imagen de las mascotas que se manda a llamar posteriormente en este código
        <footer>
          <Container className="align-left"><Row>
            <Col className="text-center py-3">Copyrigtht &copy; VetPet</Col>
            
            </Row></Container>
            <right> <img src="./images/mascotas.png" alt="Girl in a jacket" width="400" height="300"  ></img></right>
           
            </footer>
    
  )
}

export default Footer