import ItemDetail from './ItemDetail';
import React, {useState, useEffect} from 'react';

const detail = { id:1, descripcion: 'Destornillador phillips', precio:100};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(detail);
            }, 2000);
        });

        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;
