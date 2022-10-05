
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (

    <div className='container px-4'>
      <div class="row gx-5">
        <div class="col">
           <h1 className="p-3 border bg-light">{product.name}</h1>
           <Link className="p-3 border bg-light" style={{ marginTop: '20px'}} to={`/producto/${product.id}`}>Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
