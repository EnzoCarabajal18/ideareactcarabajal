
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app/style.css';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer';

const App = () => (
    <div>
        <NavBar />
        <ItemListContainer/>
    </div>
)

  
  
export default App;