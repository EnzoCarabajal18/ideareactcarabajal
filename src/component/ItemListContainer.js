import React,{useEffect, useState} from 'react';
import {productos} from '../api/productos';
import ItemList from './ItemList';
//import { useParams } from 'react-router-dom';



export const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([]);
     const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProductos = new Promise(resolve => {
            setTimeout(() => {
                resolve (productos);
            }, 2000);
        });
        getProductos.then((result) => {
            setProductos(result);
            setLoading(false);
        });
        // if (categoriaId) {
        //     getData.then(res => setData(res.filter(herramientas => herramientas.category === categoriaId)));
        // }else {
        //     getData.then((res) => setData(res));
        // }
    },[]);
        return loading ? <p>Loading</p>: (  <ItemList productos={productos}/>
         
        )
    };

 export default ItemListContainer;