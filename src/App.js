
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app/style.css';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer';
import MostrarCarrito from './component/MostrarCarrito';
import { useEffect } from 'react';

const App = () => {
    //clase 6
    // const [p, setP] = usuState([]);
    // useEffect(() => {
    //     setP(personas);
    // },[])
    //hasta acá
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades al carrito`)
    }
    return(
    <div>
        <NavBar />
        <ItemListContainer/>
        <MostrarCarrito initial={1} stock={5} onAdd={onAdd}/>
    </div>
    )
}


  
  
export default App;