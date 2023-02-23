import { borderRadius, textAlign } from '@mui/system'
import React from 'react'
//import { style } from "@mui/system"


const ItemDetail = ({producto}) => {
    const pathImg = "https://mismanospueden.000webhostapp.com/assets/" + producto.foto
    return (
        <>
        <div style={estilos.card}>
            <div style={estilos.cardImg}>
            <img style={estilos.img} src={pathImg} alt={producto.nombre}/>
            </div>
            <p style={estilos.cardTexto}><strong> {producto.nombre} </strong></p>
            <p > {producto.descripcion}</p>
            <p style={estilos.cardTexto}><strong>Precio: ${producto.precio}</strong></p>
            <button style={estilos.cardBtn}>Comprar</button>
        </div>
        </>      
        )
}

export default ItemDetail


const estilos = {
    card: {
        width: 350,
        textAlign: "center",
        border: "1px solid lightgrey",
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    img: {
        width: 238,
        height: 159,
        boxShadow: "14px 14px 26px 7px rgba(0, 0, 0, 0.33)",
        borderRadius: 10,    
      },
    
  };