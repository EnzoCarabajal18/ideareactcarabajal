import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import React from 'react';
import { Link } from 'react-router-dom';
// import ItemDetail from './ItemDetail';
import Item from './Item';
const ItemList = ({data}) => {   
    return (
      <div>
        <Container fluid="md">
          <Row>
              <Link to={`/detalle/${data.id}`}>
              <h2 style={{textDecoration: 'none'}}>{data.nombre}</h2>
              <p style={{textDecoration: 'none'}}>Precio: ${data.precio}</p>
              <p style={{textDecoration: 'none'}}>Stock disponible:{data.stock}</p>
              </Link>
            <Item/>
          </Row>
        </Container>
      </div>
    )
  }

 export default ItemList;