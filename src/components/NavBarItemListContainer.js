import React from 'react'
import {Link} from 'react-router-dom'

export const NavBarItemListContainer = (props) =>{
    return( 
        <>

        <div style={estilos.listaContenedor}>
            <ul style={estilos.ul}>
                <li><Link style={estilos.a} to='/'>Inicio</Link></li>
                <li><Link style={estilos.a} to='/productos'>Productos</Link></li>
                <li><Link style={estilos.a} to='/quienessomos'>Quienes Somos</Link></li>
                <li><Link style={estilos.a} to='comocomprar'>Como Comprar</Link></li>
                <li><Link style={estilos.a} to='contacto'>Contacto</Link></li>
            </ul>
            <p style={estilos.mensaje}>{props.greeting}</p>
        </div>
            
        </>
    )
}


const estilos = {
    listaContenedor: {
        display: "flex",
        alignItems: "center"
    },
    ul: {
      margin: 0,
      padding: 0,
      paddingRight: 80,
      gap: 20,
      height: 100,
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    a: {
      textDecoration: "none",
      color: "grey",
      fontFamily: "Segoe UI, Arial, Courier New",
    },
    mensaje: {
        style: "bold",
        marginRight: 20
        
    }
  };