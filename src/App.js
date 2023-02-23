import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <header>
      <NavBar />
      <ItemListContainer greeting="Lista de Productos:"/>
      <ItemDetailContainer/>
    </header>
  );
}


export default App;
