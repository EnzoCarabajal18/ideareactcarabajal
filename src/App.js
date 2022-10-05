import './App.css';
import {collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'; 
import {db} from './firebase/config'; 
import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './component/NavBar';
// import ItemListContainer from './component/ItemListContainer';
// import ItemDetailContainer from './component/ItemDetailContainer';
// import CartProvider from './context/CartContext';
// import Cart from './component/Cart';
{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/> */}
function App() {

  const [product, setProduct] = useState()

useEffect (() => { 
  const getProducts = async () => {
  const data = await getDocs(collection(db, 'Productos'))
  const products = data.docs.map(doc => doc.data())
  setProduct(products);
  }
  getProducts();
}, [])

  return (
    <div>
      {console.log(product)}
      {product.map(p =>
        <div>
          <h1>Nombre: {p.name}</h1>
          <h2>Precio: ${p.price}</h2>
        </div>
      )}
    </div>
  );
}

export default App;




     {/* <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider> */}