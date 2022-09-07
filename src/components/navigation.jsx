
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {Fragment} from 'react';
function Navigation({user}) {

    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyIdeas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          {!user&&<Fragment>
            <Nav.Link href="/login">Login</Nav.Link>

            <Nav.Link href='/register'>Register</Nav.Link>
          </Fragment>}

          
        {user&&<Fragment>
          <Nav.Link href="/profile">{user.name}</Nav.Link>
          
          <Nav.Link href='/logout'>Logout</Nav.Link>
        </Fragment>}
            <NavDropdown title="database" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="brands">Brands</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <NavDropdown.Divider />
              </NavDropdown.Item>
                <NavDropdown.Item href="products">prodect</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="products_categories"></NavDropdown.Item>
              <NavDropdown.Item href="products_categories">products_categories</NavDropdown.Item>
            <NavDropdown.Item href="/"></NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="categories"></NavDropdown.Item>
            <NavDropdown.Item href="categories">categories</NavDropdown.Item>
          <NavDropdown.Item href="/"></NavDropdown.Item>
          <NavDropdown.Divider />

              <NavDropdown.Item href="origins">Origin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
            

              <NavDropdown.Item href="units">Units</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>


              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;


       