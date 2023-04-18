import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'
import CategSelec from "./CategSelec";
import CategArray from "./CategArray";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [catsReady, setCatsReady] = useState(false);
  const [cats, setCats] = useState([]);

  const onSelect = (categoria) => {
    setCategoria(categoria);
  };

  const obtenerArray = (arr) => { 
    setCats(arr);
    setCatsReady(true);
  };

  useEffect(() => {
    const productsCollection = collection(db, "productos");

    const q =
      categoria.length > 0
        ? query(productsCollection, where("categoria", "==", categoria))
        : query(productsCollection, where("stock", ">", 0));

    getDocs(q)
      .then((data) => {
        const lista = data.docs.map((ele) => {
          return { ...ele.data(), id: ele.id };
        });
        setProducts(lista);
      })
      .catch(() => setError(true));
  }, [categoria]);

  return (
    <>
      <h1>{greeting}</h1>
      <CategArray obtenerArray={obtenerArray} />
      {catsReady ? (
        <CategSelec onSelect={onSelect} valoresCats={cats} />
      ) : (
        <h2>Cargando categorias...</h2>
      )}

      {!error ? (
        <>
          {products.length ? (
            <ItemList productos={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  );
};

export default ItemListContainer;