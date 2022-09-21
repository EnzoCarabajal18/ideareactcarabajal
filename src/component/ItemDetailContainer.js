import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// const details =[ 
// { id:1, descripcion: 'Destornillador phillips', precio:100},
// { id:2, descripcion: 'Llave cruz auxilio', precio:250},
// { id:3, descripcion: 'Kit seguridad para autos y camionetas', precio:500},
 //];
 const herramientas = [
    {   
        id: 1,
        nombre: "Destornillador",
        precio: 100,
        stock: 5,
        category : 'herramientas',
    },
    {
        id: 2, 
        nombre: "Llave cruz",
        precio: 250,
        stock: 3,
        category : 'herramientas',
    },
    {
        id: 3,
        nombre: "Kit Seguridad",
        precio: 500,
        stock: 1,
        category : 'seguridad',
    }
]; 


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(herramientas);
            }, 2000);
        });
        getData.then(res => setData(res.find(detalle => detalle.id === parseInt (detalleId))));
        // getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
        
    );
}

export default ItemDetailContainer;
