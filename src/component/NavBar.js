import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { totalQty, totalPrice } = useCartContext();

  return (
    <div className='container'>
      <NavBar bg="light" expand="lg" className='nav__link'>
        <Container>
          <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='/'>IÑAKI</NavLink>
          <Nav className="me-auto">
          <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='/categorias/herramientas'>Herramientas</NavLink>
          <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='/categorias/seguridad'>Seguridad</NavLink>
          <NavLink className="btn btn-secondary" style={{ margin: '4px'}} to='/categorias/accesorios'>Accesorios</NavLink>
          </Nav>
          <Link  className="btn btn-secondary" style={{ margin: '4px'}}  to='/cart'><i class="bi bi-cart-dash"> {totalQty}</i></Link>
          <Link class="p-3 mb-2 bg-warning text-dark rounded" style={{ textDecorationLine: 'none'}}>Terminar compra por $: ${totalPrice}</Link>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;