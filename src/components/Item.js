import React from 'react'
import {Link, NavLink} from 'react-router-dom'



const handlerClick = (id) => {
  console.log(id)
//  <Link to= '/productos/7' />  
}

function Item({producto}) {
  const path = `/productos/${producto.id}`
  const pathImg =  producto.foto
  return (
    <>
      <div style={estilos.card}>
        <div style={estilos.cardImg}>
          <img style={estilos.img} src={pathImg} alt={producto.nombre}/>
        </div>
        <p style={estilos.cardTexto}><strong> {producto.nombre} </strong></p>
        <p style={estilos.cardTexto}>Precio: ${producto.precio}</p>
        
        <p style={estilos.boton}><Link to={path}>Ver detalle</Link></p>
      </div>
    </>        

  )
}

export default Item

const estilos = {
  boton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightgrey",
    width: 200,
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
    borderRadius: 5,
    textDecoration: "none",
    border: "1px solid grey",
    
  },
  card: {
    width: 350,
    border: "1px solid lightgray",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10
  },

  img: {
    width: 238,
    height: 159,
    boxShadow: "14px 14px 26px 7px rgba(0, 0, 0, 0.33)",
    borderRadius: 10,

  },
    cardImg: {
      
    },
    cardTexto:{
      width: 350,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center"

    },
    cardBtn: {
      width: 200,
      //boxShadow: "0px 10px 14px -7px #91b8b3",
	    //background: "linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%)",
	    backgroundColor: "lightgrey",
      borderRadius: 4,
      border: "1px solid grey",
      display: "inline-block",
      cursor: "pointer",
      //color: "#ffffff",
      fontFamily: "",
      fontSize: 13,
      padding: "6px 12px",
      textDecoration:"none",
      //textShadow: "0px 1px 0px #2b665e",

    },


  }