//import ItemCount from './ItemCount';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';


const Item = ({producto}) => { 
//   const onAdd = (quantity) => {
//     alert(`Agregaste ${quantity} unidades al carrito`);
// };
  return (

<div claaName='Item'>
  <h1>{producto.nombre}</h1>
  <p>{producto.id}</p>
  <p>{producto.category}</p>
  <p>{producto.precio}</p>
</div>

      // <Col xs md={4}>
      //   <Card style={{ width: '18rem', margin: '10px'}}>
      //     <Link to={`/detalle/${item.id}`} className="detail">
      //       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      //       <Card.Body>
      //           <Card.Title style={{textDecoration: 'none'}}>{item.nombre}</Card.Title>
      //           <Card.Text style={{textDecoration: 'none'}}>Precio: ${item.precio}</Card.Text>
      //           <Card.Text style={{textDecoration: 'none'}}>Stock disponible:{item.stock}</Card.Text>
      //           <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      //           <Button variant="primary" style={{ margin: '4px'}}>Comprar</Button>
      //       </Card.Body>
      //     </Link>
      //   </Card>
      // </Col>
    );
}
export default Item;