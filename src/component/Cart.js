
import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeItem, emptyCart } = useCartContext();

  const deleteFromCart = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    emptyCart();
  };

  return (
    <div className='Cart'>
      <p>Termina tus compras!!!</p>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => {
              return (
                <li key={index}>
                  <p>Productos: {item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Total: ${item.quantity * item.price}</p>
                  <button onClick={() => deleteFromCart(item)}>Eliminar del carrito</button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
      <p></p>
      )}
      <button onClick={() => deleteCart()}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;