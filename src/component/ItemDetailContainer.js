import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {productos} from './products';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);  
    const [loading, setLoading] = useState(true);

    const {productId}= useParams();

        useEffect(() => {
        const getProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve (productos);
            }, 2000);
        });
        getProducts.then((result) => {
            const prodFiltered = result.filter((prod) => prod.id == productId);
            setProduct(prodFiltered[0]);
            setLoading(false);
        });
    },[productId]);
        return loading ? <p>Loading...</p>: <ItemDetail product={product}/>
};
export default ItemDetailContainer; 