import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import {collection, doc, getDocs, } from 'firebase/firestore'; 
import {db} from '../firebase/config'; 
import ItemList from './ItemList';


const ItemListContainer = () => {
const [products, setProduct] = useState()

useEffect (() => { 
  const getProducts = async () => {
  const data = await getDocs(collection(db, 'Productos'))
  const products = data.docs.map(doc => doc.data())
  setProduct(products);
  }
  getProducts();
}, [])

  return <ItemList products={products} />;
};

export default ItemListContainer;