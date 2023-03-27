import React from 'react'
import style from './style.css'
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <>
        <div style={estilos.footerContainer}>
            <div className="datosContacto" >
                <p >Contactanos:</p>
                <ul>
                    <li>Tel: +54 11 3456 7890</li>
                    <li>meli@gmail.com</li>
                </ul>
            </div>
            <div className="redesSociales">
                <p >Sigamos conectados:</p>
                <div>
                    <a href="https://wa.me/+541161172331" target="_blank"><img src="https://mismanospueden.000webhostapp.com/assets/whatsapp.png" alt="icono de whatsapp" style={estilos.tamanioLogos}/></a>
                    <a href="https://www.instagram.com/mismanos.pueden/" target="_blank"><img src="https://mismanospueden.000webhostapp.com/assets/instagram.png" alt="icono de instagram" style={estilos.tamanioLogos}/></a>
                </div>
            </div>

        </div>
        
</>
  )
}

const estilos = {
    footerContainer: {
        display: "flex",
        flexDirection: "row",

    },
    contactanosContainer:{
        width: "50%",
    },
    tamanioLogos: {
        width: "30px",
        height: "30px",
    }
}

export default Footer
