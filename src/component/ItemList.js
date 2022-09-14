import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import React from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';
const ItemList = () => {   
    return (
<div>
<Container fluid="md">
      <Row>
        <Item>
          <ItemDetail/>
        </Item>
      </Row>
    </Container>
</div>
        )
    }

 export default ItemList;