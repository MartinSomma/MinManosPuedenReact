import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio'
import QuienesSomos from './components/QuienesSomos'
import ComoComprar from './components/ComoComprar'
import { CustomProvider } from "./Context/CustomContext";


import Contacto from './components/Contacto'
import Carrito from './components/Carrito'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <CustomProvider>
        <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/productos' element={<ItemListContainer greeting="Lista de Productos:"/>}/>
              <Route path='/quienessomos' element={<QuienesSomos/>}/>
              <Route path='/comocomprar' element={<ComoComprar/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/carrito' element={<Carrito/>}/>
              <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
            </Routes>
          </main>
      </CustomProvider>
    </BrowserRouter>
      
    </>
  );
}


export default App;
