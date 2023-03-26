import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect( () => {
    const productsCollection = collection(db,'productos')
    const q = query(productsCollection, where ("stock", ">", 0))
    
    getDocs(q).then (
      (data) => {
        const lista = data.docs.map( ele => {
            return (
               { ...ele.data(), id: ele.id }
              )            
        } )
        setProducts(lista)
      }
    )
    .catch (()=> setError(true))
      
  },[] )


  return (
    <>
      <h1>{greeting}</h1>
      {!error ? (
        <>
          {products.length ? (
            <ItemList productos={products}/>
          ) : (<h1>Cargando...</h1>)
          }
        </>
      ) : (<h1>Hubo un error</h1>)
      }
    </>
  );
};

export default ItemListContainer;