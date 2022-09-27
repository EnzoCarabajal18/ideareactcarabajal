import React,{useEffect, useState} from 'react';
import {productos} from './products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(true);
const { categoryId} = useParams();   

        useEffect(() => {
        const getProducts = new Promise((resolve,) => {
            setTimeout(() => {
                resolve (productos);
            }, 2000);
        });
        getProducts.then((result) => {
            if (categoryId) {
            const prodFiltered = result.filter((prod) => prod.category === categoryId);
            setProducts(prodFiltered);
            }else {
                setProducts(result);
            }
            setLoading(false);
        });
        return () => {
            setLoading(true);
    };
    },[ categoryId]); 

        return loading ? <p>Loading...</p>:<ItemList products={products}/>
    };

 export default ItemListContainer;
