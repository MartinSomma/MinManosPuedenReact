import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const obtenerProducto = async () => {
        try {
            const res = await fetch("https://63c17853376b9b2e647c8e81.mockapi.io/mmp/productos/1");
            const data = await res.json();
            setProducto(data);
        } finally {
            setLoading(false);
        }
        };

        obtenerProducto();
    }, []);

    return (
        <>
        {<>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
        </>
    );
    




}

export default ItemDetailContainer
