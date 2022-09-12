import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import React from 'react';
import Item from './Item';
const ItemList = () => {   
    return (
<div>
<Container fluid="md">
      <Row>
        <Item/>
      </Row>
    </Container>
      
</div>
        )
    }

 export default ItemList;