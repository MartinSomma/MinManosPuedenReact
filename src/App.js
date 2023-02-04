import './App.css';
import logo from './assets/logo.png';
import Carrito from '@mui/icons-material/ShoppingCartOutlined';
import { borderRadius } from '@mui/system';


function App() {
  return (
    <header>
      <nav style={estilos.navBar}>
        <div >
          <img src={logo} alt="" style={estilos.imagen}/>
        </div>
        <ul style={estilos.li}>
          <li><a style={estilos.a} href="#">Inicio</a></li>
          <li><a style={estilos.a} href="#">Productos</a></li>
          <li><a style={estilos.a} href="#">Quienes Somos</a></li>
          <li><a style={estilos.a} href="#">Como Comprar</a></li>
          <li><a style={estilos.a} href="#">Contacto</a></li>
        </ul>
        <div style={estilos.carrito}>
          <div style={estilos.bordeCarrito}>
            <Carrito fontSize="large"/>
            <span>VACIO</span>
          </div>
        </div>
        
      </nav>
    </header>
  );
}

const estilos = {
  navBar:{
    display: "flex",
    background: "lightgray",
    height: 100
  },
  imagen: {
    width: 100,
  },
  li:{
    
    margin: 0,
    gap: 20,
    width: 1000,
    height: 100,
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  a:{
    textDecoration: "none",
    color: "grey",
  },
  carrito:{
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
    
  },
  bordeCarrito:{
    display: "flex",
    alignItems: "center",
    border: "solid 1px",
    borderRadius: 5,
    padding: 10
  }
}

export default App;
