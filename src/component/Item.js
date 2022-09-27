import React from 'react';
//import ItemCount from './ItemCount';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
 import { Link } from 'react-router-dom';


const Item = ({product}) => { 
  return ( 
  <div className='Item'>
    <h1>{product.nombre}</h1>
    <p>Precio: ${product.precio}</p>
    <Link to={`/producto/${product.id}`}>VER DETALLE</Link>
  </div>
  );
};
export default Item; 