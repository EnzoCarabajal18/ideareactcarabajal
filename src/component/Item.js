
import React from 'react';
//import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div>
      {console.log(product)}
      {product.map(p =>
        <div>
          <h1>Nombre: {p.name}</h1>
          <h2>Precio: ${p.price}</h2>
        </div>
      )}
    </div>
  );
};

export default Item;
