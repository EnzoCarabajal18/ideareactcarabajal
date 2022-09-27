import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const {cart, removeItem, emptyCart } = useCartContext();
     

    const deleteFromCart = (id) => {
        removeItem(id);
      };
    
      const deleteCart = () => {
        emptyCart();
      };

    return (
        <div className='Cart'>
            <p>Carrito</p>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {Cart.map((item, index) => {
                         return ( 
                         <li key={index}>
                            <p>{item.nombre}</p>
                            <p>{item.quantity}</p>
                            <p>{item.quantity * item.precio}</p>
                            <button onClick={() => deleteFromCart(item)}>Eliminar del carrito</button>
                         </li>
                         );
                        })}    
                </ul>                
                </>
            ): ( 
            <p>Cart is empty</p>
            )} 
            <button onClick={() => deleteCart()}>Vaciar carrito</button>
        </div>
    );
};
export default Cart