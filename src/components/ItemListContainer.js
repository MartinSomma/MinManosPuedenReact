import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
//import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
 // const { name } = useParams();
  
  const URL = "https://63c17853376b9b2e647c8e81.mockapi.io/mmp/productos"


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  },[] );

//  const onAdd = (count) => {
//    console.log(`el usuario selecciono ${count} `);
//  };

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