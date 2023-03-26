import React from "react";
import { useContext } from "react";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";
import { NavBarItemListContainer } from "./NavBarItemListContainer"
import {Link} from 'react-router-dom'
import { CustomContext } from "../Context/CustomContext";

function NavBar() {
  const {totals} = useContext(CustomContext)
  
  return (
    <>
      <nav style={estilos.navBar}>
        <div style={estilos.contendorImg}>
          <img src={logo} alt="" style={estilos.imagen} />
        </div>

        <div style={estilos.contenedorLista}>
            <NavBarItemListContainer  greeting="Hola, Martin!" />
        </div>

        <div style={estilos.contenedorCarrito}>
          <Link to='carrito'><CartWidget cant={totals.qty} /></Link> 
        </div>

      </nav>
    </>
  );
}

export default NavBar;

const estilos = {
  navBar: {
    display: "flex",
    height: 100,
    width: "100%",
  },
  imagen: {
    width: 100,
  },

  contendorImg:{
    width: 100

  },
  contenedorLista: {
    width: "90%"
    

  },
  contenedorCarrito: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  }
};
