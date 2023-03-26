import React, { useContext } from "react";
import ItemCount from './ItemCount';
import { CustomContext } from "../Context/CustomContext";


const ItemDetail = ({producto}) => {
    const pathImg = producto.foto
    const { getQty, removeProduct, agregarProducto } = useContext(CustomContext);

    const onAdd = (count) => {
        (count > 0) ? agregarProducto(producto, count) : removeProduct(producto.id)
    };



    return (
        <>
        <div style={estilos.card}>
            <div style={estilos.cardImg}>
                <img style={estilos.img} src={pathImg} alt={producto.nombre}/>
            </div>

            <p style={estilos.cardTexto}><strong> {producto.nombre} </strong></p>
            <p> {producto.descripcion}</p>
            <p style={estilos.cardTexto}><strong>Precio: ${producto.precio}</strong></p>
            <ItemCount onAdd={onAdd} initial={getQty(producto.id)} stock={producto.stock}/>        
            </div>
        </>      
        )
}

export default ItemDetail


const estilos = {
    card: {
        marginTop: "10px",
        width: 350,
        textAlign: "center",
        border: "1px solid lightgrey",
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    img: {
        width: 238,
        height: 159,
        boxShadow: "14px 14px 26px 7px rgba(0, 0, 0, 0.33)",
        borderRadius: 10,    
      },
    
  };