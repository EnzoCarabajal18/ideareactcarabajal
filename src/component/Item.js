
import ItemCount from './ItemCount';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const herramientas = [
//     {   
//         id: 1,
//         nombre: "Destornillador",
//         precio: 100,
//         stock: 5,
//         category : 'herramientas',
//     },
//     {
//         id: 2, 
//         nombre: "Llave cruz",
//         precio: 250,
//         stock: 3,
//         category : 'herramientas',
//     },
//     {
//         id: 3,
//         nombre: "Kit Seguridad",
//         precio: 500,
//         stock: 1,
//         category : 'seguridad',
//     }
// ]; 


// useEffect(() => {
//     const getData = new Promise((resolve) => {
//         setTimeout(() => { 
//         resolve(herramientas);
//     }, 2000);
//     });
//     if (categoriaId) {
//         getData.then((res) => setData(res.filter(herramientas => herramientas.category === categoriaId)));
//     }else {
//         getData.then((res) => setData(res));
//     }
// }, [categoriaId]);
// const [data, setData] = useState([]);

// const {categoriaId} = useParams();

const Item = ({item}) => { 
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades al carrito`);
};
    return (
      <Col xs md={4}>
        <Card style={{ width: '18rem', margin: '10px'}}>
          <Link to={`/detalle/${item.id}`} className="detail">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title style={{textDecoration: 'none'}}>{item.nombre}</Card.Title>
                <Card.Text style={{textDecoration: 'none'}}>Precio: ${item.precio}</Card.Text>
                <Card.Text style={{textDecoration: 'none'}}>Stock disponible:{item.stock}</Card.Text>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <Button variant="primary" style={{ margin: '4px'}}>Comprar</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    );
}
export default Item;