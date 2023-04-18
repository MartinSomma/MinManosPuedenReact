import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {db} from '../firebase/firebase'
import {doc, getDoc, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    

    useEffect( () => {

        const productsCollection = collection(db,'productos')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(
            (ele) => {
                setProducto({ id: ele.id, ...ele.data() })
                setLoading(false)
            }
        )
        .catch (()=> setLoading(false))

    }, [id]);

    return (
        <>
        {<>{loading ? <h1>Cargando...</h1> : (<ItemDetail producto={producto} />) }</>}
        </>
    );
    




}

export default ItemDetailContainer
