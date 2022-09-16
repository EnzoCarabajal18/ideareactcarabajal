import React from 'react';
export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h2>Detalles</h2>
                    <p>ID: {data.id}</p>
                    <p>Categoría: {data.descripcion}</p>
                    <p>Precio final: {data.precio}</p>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;
