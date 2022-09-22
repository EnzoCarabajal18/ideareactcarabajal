import React,{useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const herramientas = [
    {   
        id:1,
        nombre: "Destornillador",
        precio: 100,
        stock: 5,
        category: 'herramientas',
    },
    {
        id:2,
        nombre: "Llave cruz",
        precio: 250,
        stock: 3,
        category: 'herramientas',
    },
    {
        id:3,
        nombre: "Kit Seguridad",
        precio: 500,
        stock: 1,
        category: 'seguridad',
    }
];

export const ItemListContainer = ({herramienta}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (herramientas);
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(herramientas => herramientas.category === categoriaId)));
        }else {
            getData.then((res) => setData(res));
        }
    },[categoriaId])
        return(
            <>
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
                <ItemList data={data}/>
            </>
        );
    }

 export default ItemListContainer;