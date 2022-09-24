import React from 'react';
//import { Link } from 'react-router-dom';
// import ItemDetail from './ItemDetail';
import Item from './Item';



const ItemList = ({productos}) => {  
 
    return (
        <div className='ItemList'>
        {productos.map((producto, i) => {

        return <Item key={i} producto={producto} />
})}
      </div>
);
}
 export default ItemList;