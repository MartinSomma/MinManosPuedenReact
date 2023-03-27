import React, { useEffect, useState } from "react";
import 'swiper/css';
import estilos from './estilos.module.css'
import SimpleSlider from './Slider'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./../firebase/firebase";



const Inicio = () => {
  

  const [destacados, setDestacados] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    const productsCollection = collection(db, "productos");
    const consulta = query(productsCollection, where("destacado", "==", true))
  
    getDocs(consulta)
      .then((data) => {
        const list = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setDestacados(list);
      })
      .catch(() => {
        setError(true);
    })
  }, [] );



  return (
    <div>
          <section className = {estilos.bannerDecora}>
                <h1>DECORA TU CASA</h1>
          </section>   
          <section className={estilos.destacados}>
            <h2>Destacados</h2>
          </section> 

          <SimpleSlider destacados={destacados}/>

          
    </div>
  )
}

export default Inicio

