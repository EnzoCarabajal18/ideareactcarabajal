import {useEffect, useState} from 'react';
import getItem from "./ItemDetail";
import ItemDetail from './ItemDetail';


const ItemdetailContainer =({item}) => {
    const [Item, setItem] = useState({});
    useEffect(() => {
    getItem().then((herramientas) => { 
        setItem(herramientas);
    });
},[]);

return (
    <ItemDetail item={item}/>
)
}
export default ItemdetailContainer;