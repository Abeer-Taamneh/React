import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({user}) {

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MyIdeas</Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/products">Products</Nav.Link>

              {!user&&<Fragment>
                  <Nav.Link href="/login">Login</Nav.Link>

                  <Nav.Link href='/register'>Register</Nav.Link>
                </Fragment>}

                
              {user&&<Fragment>
                <Nav.Link href="/profile">{user.name}</Nav.Link>
                
                <Nav.Link href='/logout'>Logout</Nav.Link>
              </Fragment>}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/brands">Brands</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      
    );
}

export default Navigation;

 //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
       