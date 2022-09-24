import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="container">
    <Navbar bg="light" expand="lg" className='nav__link'>
      <Container>
        <NavLink className="btn btn-secondary" style={{ margin: '4px'}}>Iñaki</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='category/herramientas'>Herramientas</NavLink>
            <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='category/seguridad'>Seguridad</NavLink>
          </Nav>
            <NavLink className="" to='cart'><CartWidget/></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBar