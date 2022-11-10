import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap'
function Header() {
  return (
    
        <header>
          <right>
            <Navbar bg="info" expand="lg" collapseOnSelect >
      <Container>
        <Navbar.Brand href="#home">VetPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Locate Veterinaries</Nav.Link>
            <NavDropdown title="E-Commerce" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link2">Adoption Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></right>
            
            
           

        </header>
    
  )
}

export default Header