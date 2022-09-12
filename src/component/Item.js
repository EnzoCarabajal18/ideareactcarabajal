
import MostrarCarrito from './MostrarCarrito';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades al carrito`)
    }  
    return (
    herramientas.map(herramienta =>
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
                </Card.Body>
            </Card>
        </Col>
    )

    )
    }

 export default Item;