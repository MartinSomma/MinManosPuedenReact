import React, {useContext} from 'react'
import { CustomContext } from "../Context/CustomContext"


const CarritoItem = ({producto}) => {
    const { removeProduct } = useContext(CustomContext);

  return (
    
    <>
        <tr>
            <td >{producto.nombre}</td>
            <td >{producto.precio}</td>
            <td >{producto.quantity}</td>
            <td ><button onClick = {()=>removeProduct(producto.id)}>x</button></td>
        </tr>
    </>
  )
}

export default CarritoItem

