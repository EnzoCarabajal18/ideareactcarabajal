
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

function App () {
    return(
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
);  
}

export default App;