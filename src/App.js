
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app/style.css';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer';
import MostrarCarrito from './component/MostrarCarrito';

const App = () => {
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