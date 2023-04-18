import React, { useState,useEffect,  } from 'react'
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'


const CategArray = ({ obtenerArray }) => {
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, where("stock", ">", 0));
  const [categorias, setCategorias] = useState([]);
  const [datosListos, setDatoslistos] = useState(false);

  useEffect(() => {
    getDocs(q)
      .then((data) => {
        const lista = data.docs.map((ele) => {
          return ele.data().categoria;
        });
        setCategorias(
          lista.filter((item, index) => {
            return lista.indexOf(item) === index;
          })
        );
        setDatoslistos(true);
      })
      .catch();
  }, []);

  return <>{datosListos ? obtenerArray(categorias) : <h1>Cargando...</h1>}</>;
};

export default CategArray;
