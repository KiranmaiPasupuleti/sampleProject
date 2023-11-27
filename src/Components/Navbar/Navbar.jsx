import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('email')
    navigate('/')
  }
  return (
    <div style={{height:'10vh'}} className='container-fluid p-0'>
         <Navbar collapseOnSelect expand="lg" className='bg-dark container-fluid'>
      <Container>
        <Navbar.Brand as={Link} to="/home" href="#home">Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/order">Order</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
          <Nav.Link as={Link} to="/cart"> <FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
          <NavDropdown title={<i className="fa-solid fa-user"></i>} id="collapsible-nav-dropdown">

              {
                (localStorage.getItem('email') !== undefined) ? (
                  <div><NavDropdown.Item href="#action/3.1">
                  <Link className='dropdown-styling' to={'/profile'}>My Profile</Link>
    
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link className='dropdown-styling' onClick={handleLogout}>Log out</Link>
                  </NavDropdown.Item></div>
                ) : (
                  <div>
                    <NavDropdown.Item href="#action/3.1">
              <Link className='dropdown-styling' to={'/'}>Login</Link>

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link className='dropdown-styling' to={'/register'}>Register</Link>
              </NavDropdown.Item>
                  </div>
                )
                
              }
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComponent;




    // <h4>Shopify</h4>
    //     <div>
    //       <a href='#home'>Home</a>
    //       <a href='#product'>Products</a>
    //       <a href='#order'>Order</a>
    //     </div>
    //     <div>
    //       <FontAwesomeIcon icon={faShoppingCart} />
    //     </div>