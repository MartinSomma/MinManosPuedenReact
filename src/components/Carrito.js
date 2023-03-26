import React, { useContext,useState } from "react";
import { CustomContext } from "../Context/CustomContext"
import CarritoItem from "./CarritoItem"
import { useNavigate } from 'react-router-dom';
import { getDoc, collection, query, where, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ContenidoCarrito from "./Tabla";




const Carrito = () => {

  const navigate = useNavigate();
  const { clear, cart, totals } = useContext(CustomContext);
  const [isSetFinalizarCompra, setFinalizarCompra] = useState(false)
  let datosComprador = {nombre: '', direccion: '', email:''}
  let cantOK = true
  

  const continuarCompra = () =>{
    setFinalizarCompra(true)
    
  }

  const guardarNombre = (e) => {
    datosComprador.nombre = e.target.value
    
  }

  const guardarDireccion = (e) => {
    datosComprador.direccion = e.target.value
    
  }

  const guardarEmail = (e) => {
    datosComprador.email = e.target.value
  }

  const guardarVenta = ()=>{
    const sellCollection = collection(db, "ventas");
    addDoc(
      sellCollection,
      {
        datosComprador,
        items: cart,
        total: totals.total,
        time: serverTimestamp()
      }
    )
    .then(result=>{
      console.log('el id de la compra es: ', result.id)
    })

  }

  const finalizarCompra = () =>{

    actualizarStock()
    guardarVenta()
    clear()

  }

  const validarStock = (id, stockActual, cantidad) =>{
    if (!((stockActual - cantidad) >= 0)){
      cantOK = false
    }
    cart[cart.findIndex((ele) => ele.id == id)].stock = stockActual
  }

  const consultarStock = (id, cantidad) =>{
    const productosCollection = collection (db, 'productos')
    const refDoc = doc(productosCollection, id)

    getDoc(refDoc)
      .then( (ele) => { 
        validarStock(id, ele.data().stock, cantidad )
      })
      .catch( ()=> console.log('error') )
  }

  const actualizarStock = () => {
    cart.forEach( (ele) => {
      const docReference = doc(db, 'productos', ele.id);
      updateDoc(docReference, {stock: (ele.stock - ele.quantity)})
      }
    )
  };
  
  
  return (
    

    cart.length<1 ? (<div>El carrito esta vacio</div>) : (
      <>
      <h2>Articulos en el carrito:</h2>
      <div style={estilos.tableContainer}>
        <ContenidoCarrito/>
      </div>
      
        
        <div>
          <h2>RESUMEN DE LA COMPRA</h2>
          <p>Articulos:{totals.qty}   </p>
          <p>Total: ${totals.total}</p>
          <div>
            <button onClick={() => navigate('/productos')}>Agregar mas poductos</button>
            <button onClick={() => clear()}>Vaciar Carrito</button>
            <button onClick={continuarCompra}>Continuar con la compra</button>
          </div>
        </div>

        
          <div style={ isSetFinalizarCompra ? estilos.formularioON : estilos.formularioOFF}>
            <h2>Datos de envio</h2>
            <label>Ingrese Nombre y Apellido: </label>
            <input type="text" placeholder="Ingresa al nombre y apellido" onChange={guardarNombre} />
            <label>Direccion: </label>
            <input type="text" placeholder="Calle Nro, localidad, provicia, codigo postal" onChange={guardarDireccion} />
            <label>Ingrese Correo electonico: </label>
            <input type="email" placeholder="correo electronico" onChange={guardarEmail} />
            <button onClick={finalizarCompra}>Finalizar Compra</button>
          </div>
        
      
      </>
    )  
  )
}

export default Carrito


const estilos = {
  tableContainer: {
    width:"60%",
    marginLeft: "20px",
  },
  formularioON: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginBottom: "20px",
  },
  formularioOFF: {
    display: "none",
  }

}
