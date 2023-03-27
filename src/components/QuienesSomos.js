import React from 'react'
import style from './style.css'
import Box from '@mui/material/Box';

const QuienesSomos = () => {
  return (
    <div>
              <section className="">
                  <h1>Quienes Somos</h1>
              </section>
              <div className={  style.ajustarContenido}>

                <Box sx={{display: 'flex', flexDirection: 'row', width: '70%', margin: 'auto'}}>
                
                <div className="col-md-2 text-center ">
                    <picture className="quienesSomosImg">
                        <source srcset="../img/Nosotras_mobile.jpg" media="(max-width: 576px)"/>
                        <img src="https://mismanospueden.000webhostapp.com/assets/Nosotras.jpg" alt="foto de las creadoras de Mis Manos Pueden" class="mw-100"/>
                    </picture>
                </div>
                
                <div className=" ">
                    <p className="quienesSomos">Lo hecho a mano fué creado en el año 2016 por Sofi Muzio, 
                        egresada en el bachiller de Artes Visuales, Asesora de imagen, 
                        Maquilladora profesional y artística, Arteterapeuta y Ceramista. 
                        También apasionada del arte culinario, egresada en la carrera Profesional
                        Gastronómico y Pastelero profesional. "Cuando creé este espacio 
                        pensé en <strong>CALMA, NATURALEZA Y ARTE.</strong> Todos necesitamos un puente 
                        para conectarnos con nosotros mismos, nuestras emociones, disfrutar 
                        las pequeñas cosas y vivir el aquí y ahora; son algunos de nuestros 
                        pilares para formar artistas". La marca se desarrolla en dos sectores,
                        <strong>la CAPACITACIÓN y la VENTA de productos orgánicos</strong>, inspirados en el
                        cuidado del planeta. Viviendo una vida concentrada en la gratitud
                        de lo simple, lo que tenemos en nuestros hogares.
                        El disfrute por lo cotidiano y el amor por lo artesanal, todo esto y 
                        muchas emociones que nos despierta utilizar estas piezas <strong>HECHAS A MANO.</strong>
                        Este sector se encuentra en Argentina y está a cargo de Florencia Miale,
                        una amiga de la casa que en sus comienzos fue alumna del espacio, luego 
                        se convirtió en mucho mas que eso, y hoy es la administradora de la 
                        tienda.  La tienda contiene pocos y últimos productos en stock, ya que 
                        mi viaje a Estados Unidos me llevó a mudar el sector VENTAS al país donde 
                        vivo ahora. En el sector de la CAPACITACIÓN nos encontramos en un espacio 
                        virtual, donde los alumnos pueden aprender cerámica desde cero y luego 
                        establecer consultas a través de un foro, tomar clases especializadas de 
                        cerámica, contratar asesorías personalizadas y aprender sobre cómo hacer 
                        de esto que tanto les gusta un negocio. Seguiremos creciendo y 
                        desarrollando nuevos espacios para acercarles a la comunidad LO HECHO A 
                        MANO, mas herramientas orgánicas de desarrollo personal y emocional.</p>
                </div>
                </Box>
            </div>
    </div>
  )
}

export default QuienesSomos
