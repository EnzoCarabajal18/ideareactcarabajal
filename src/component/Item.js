
import MostrarCarrito from './MostrarCarrito';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
//import ItemdetailContainer from 'ItemDatailContainer';
const herramientas = [
    {
        nombre: "Destornillador",
        precio: 100,
        stock: 5
    },
    {
        nombre: "Llave cruz",
        precio: 250,
        stock: 3
    },
    {
        nombre: "Kit Seguridad",
        precio: 500,
        stock: 1
    }
]; 

const Item = () => { 
    const [data, setData] = useState([]);
useEffect(() => {
    const getData = new Promise((resolve) => {
        setTimeout(() => { 
        resolve(herramientas);
    }, 2000);
    });
    getData.then((res) => setData(res));
    }, []);
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades al carrito`);
    };
    return (
    data.map((herramienta) =>
            <Col xs md={4}>
            <Card style={{ width: '18rem', margin: '10px'}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                <Card.Title>{herramienta.nombre}</Card.Title>
                <Card.Text>
                    {herramienta.precio}
                </Card.Text>
                <Card.Text>Stock disponible:{herramienta.stock}</Card.Text>
                <MostrarCarrito initial={1} stock={5} onAdd={onAdd}/>
                <Button variant="primary" style={{ margin: '4px'}}>Comprar</Button>
                <Button variant="primary" style={{ margin: '4px',backgroundColor: 'grey',borderColor: 'grey'}}>Detalle del producto</Button>
                </Card.Body>
            </Card>
        </Col>
        ))
    }
export default Item;