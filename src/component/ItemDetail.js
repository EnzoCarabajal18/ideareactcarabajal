import React from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const { cart, addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className='ItemDetail'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>$ {product.price}</p>
      <ItemCount initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
