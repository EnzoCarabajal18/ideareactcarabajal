import React from 'react';
//import { Link } from 'react-router-dom';
// import ItemDetail from './ItemDetail';
import Item from './Item';



 const ItemList = ({products}) => {  
    //  return(
    //     <div className='ItemList'>
    //     {products.map((product, i) => {
    //      return <Item key={i} product={product}/>
    //     })}
    return (
    <div className='ItemList'>
        {products.map((product, i) => {
            return <Item key={i} product={product}/>;
        })}
            </div>
    );
};
  export default ItemList;