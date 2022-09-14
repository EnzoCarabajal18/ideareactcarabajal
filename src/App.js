
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app/style.css';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

const App = () => {
    return(
    <div>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
    )
}

export default App;