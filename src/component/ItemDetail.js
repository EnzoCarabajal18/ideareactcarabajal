import React from 'react';
import { Link } from 'react-router-dom';
 const ItemDetail = ({data}) => {
    return (
        <Link to={`/detalle/${data.id}`}>
        <h2 style={{textDecoration: 'none'}}>{data.nombre}</h2>
        <p style={{textDecoration: 'none'}}>Precio: ${data.precio}</p>
        <p style={{textDecoration: 'none'}}>Stock disponible:{data.stock}</p>
        </Link>
    );
}
export default ItemDetail;
