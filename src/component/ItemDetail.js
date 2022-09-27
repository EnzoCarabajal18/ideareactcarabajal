import React from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
    const { cart, addToCart } = useCartContext();
    const onAdd = (quantity) => {
    addToCart(product, quantity);
};

    return(
        <div className='itemDetail'>
            <h1>{product.nombre}</h1>
            <p>Código: {product.id}</p>
            <p>Caregoría: {product.category}</p>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount initial={1} onnAdd={onAdd}/>
        </div>
    );
};
export default ItemDetail; 