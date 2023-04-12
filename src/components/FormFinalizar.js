import React, { useContext, useState } from "react";
import { CustomContext } from "../Context/CustomContext";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc, 
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";


const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion: /^[a-zA-Z0-9À-ÿ()$"\s]{1,400}$/,
}


const FormFinalizar = ({devolverIdVenta}) => {

  let datosComprador = { nombre: "", direccion: "", email: "" };
  const { clear, cart, totals } = useContext(CustomContext);
  const [isDatosContactoOk, setDatosContactoOk] = useState(true);

  

  const guardarNombre = (e) => {
    datosComprador.nombre = e.target.value;
  };

  const guardarDireccion = (e) => {
    datosComprador.direccion = e.target.value;
  };

  const guardarEmail = (e) => {
    datosComprador.email = e.target.value;
  };

  const actualizarStock = () => {
    cart.forEach((ele) => {
      const docReference = doc(db, "productos", ele.id);
      updateDoc(docReference, { stock: ele.stock - ele.quantity });
    });
  };

  const guardarVenta = () => {
    const sellCollection = collection(db, "ventas");
    addDoc(sellCollection, {
      datosComprador,
      items: cart,
      total: totals.total,
      time: serverTimestamp(),
    }).then((result) => {
      devolverIdVenta(result.id);
    });
  };

const validarDatos = (expresion, valor) =>{ 
  if (expresion.test(valor)) {
    return true
  } else {
    return false
  }
}

  const finalizarCompra = () => {

    if (validarDatos(expresiones.nombre, datosComprador.nombre) &&
        validarDatos(expresiones.direccion, datosComprador.direccion) &&
        validarDatos(expresiones.correo, datosComprador.email)){
      actualizarStock();
      guardarVenta();
      clear();
    } else {

        setDatosContactoOk(false)
    }
    
      
    
    
  };




  return (
    <div style={ estilos.formularioON }>
        <h2>Datos de envio</h2>
        <label>Ingrese Nombre y Apellido: </label>
        <input
          type="text"
          placeholder="Ingresa al nombre y apellido"
          onChange={guardarNombre}
        />
        <label>Direccion: </label>
        <input
          type="text"
          placeholder="Calle Nro, localidad, provicia, codigo postal"
          onChange={guardarDireccion}
        />
        <label>Ingrese Correo electonico: </label>
        <input
          type="email"
          placeholder="correo electronico"
          onChange={guardarEmail}
        />
        <span style={ isDatosContactoOk ? estilos.datosEnvioOK : estilos.datosEnvioNOK} >
          Revisar datos de envio
        </span>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="neutral" onClick={finalizarCompra}>
            Finalizar Compra
          </Button>
        </ThemeProvider>
      
    </div>
  )
}

export default FormFinalizar

const estilos = {
  datosEnvioNOK: {
    background: "red",
    display: "block"
  },
  datosEnvioOK: {
    background: "blue",
    display: "none"

  },

  tableContainer: {
    width: "60%",
    marginLeft: "20px",
  },
  botonesContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    marginLeft: "20px",
    marginTop: "10px",
  },
  formularioON: {
    gap: "5px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  formularioOFF: {
    display: "none",
  },
  mostrarArticulos: {
    display: "inline",
  },
  ocultarArticulos: {
    display: "none",
  },
};
