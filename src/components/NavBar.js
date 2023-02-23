import React from "react";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";
import { NavBarItemListContainer } from "./NavBarItemListContainer";
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
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
          <Link to='carrito'><CartWidget cant="3" /></Link> 
        </div>

      </nav>
    </>
  );
}

export default NavBar;

const estilos = {
  navBar: {
    display: "flex",
    background: "lightgray",
    height: 100,
    width: "100%",
    //justifyContent: "space-between"
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
