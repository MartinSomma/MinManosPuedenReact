import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer  from './components/ItemListContainer';
import ItemList from "./components/ItemList"; 
import Prueba from "./components/ItemList.js"


function App() {
  return (
    <header>
      <NavBar />
      <ItemListContainer greeting="lista de productos"/>
    </header>
  );
}


export default App;
