import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 //import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const NavBar = () => {
  const {totalQty, totalPrecio} = useCartContext();
  return (
      <div className='NavBar'>
        <Navbar bg="light" expand="lg" className='nav__link'>
        <Container>
          <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='/'>Iñaki</NavLink>
          <Nav className="me-auto">
            <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='categorias/herramientas'>Herramientas</NavLink>
            <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='categorias/seguridad'>Seguridad</NavLink>
            <Link to='Cart'>Cart</Link>
            <p>Cantidad de items: {totalQty}</p>
            <p>Total: {totalPrecio}</p>
          </Nav>
          </Container>
        </Navbar>
      </div>
  );
}
export default NavBar
