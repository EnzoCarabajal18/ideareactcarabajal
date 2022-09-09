// const ItemListContainer = () => {   
//     return (
// <div class="grid">
//   <div class="g-col-6">Herramientas</div>
//   <div class="g-col-6">Repuestos</div>
//   <div class="g-col-6">Todos los productos</div>
//   <div class="g-col-6">Productos con descuentos</div>
// </div>
//         )
//     }

// const product = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     const products = [new producto ("Herramientas", "Grifería"), new producto ("Herramientas2", "Grifería2")];  
//   resolve(products);
//   },2000);
// });
import { computeHeadingLevel } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title ';

const films = [
  {id: 1, image: "", title:"Herramientas"}, 
  {id: 2, image: "", title:"Grifería"}, 
];
export const ItemListContainer = ({texto}) => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
    },3000);
  });
  getData.then(res => setData(res));
},[])
const onAdd = () => {
 console.log(`compraste ${quantity} unidades`);
};

return (
  <>
  <title greeting={texto}/>
  <ItemList data={data}/>
  </>
);}
export default ItemListContainer;