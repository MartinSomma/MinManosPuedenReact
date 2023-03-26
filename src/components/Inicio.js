import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import estilos from './estilos.module.css'


const Inicio = () => {
  return (
    <div>
          <section className = {estilos.bannerDecora}>
                <h1>DECORA TU CASA</h1>
          </section>   
          <section className={estilos.destacados}>
            <h2>Destacados</h2>
          </section> 

          
    </div>
  )
}

export default Inicio

