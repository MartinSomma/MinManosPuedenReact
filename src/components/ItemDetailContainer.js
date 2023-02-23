import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(() => {

        const obtenerProducto = async () => {
        try {
            const res = await fetch(`https://63c17853376b9b2e647c8e81.mockapi.io/mmp/productos/${id}`);
            const data = await res.json();
            setProducto(data);
        } finally {
            setLoading(false);
        }
        };

        obtenerProducto();
    }, [id]);

    return (
        <>
        {<>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
        </>
    );
    




}

export default ItemDetailContainer
