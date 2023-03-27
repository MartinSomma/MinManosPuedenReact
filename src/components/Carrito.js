import React, { useContext, useState } from "react";
import { CustomContext } from "../Context/CustomContext";
import CarritoItem from "./CarritoItem";
import { useNavigate } from "react-router-dom";
import {
  getDoc,
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import ContenidoCarrito from "./Tabla";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckOut from "./CheckOut";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Carrito = () => {
  const navigate = useNavigate();
  const { clear, cart, totals } = useContext(CustomContext);
  const [isSetFinalizarCompra, setFinalizarCompra] = useState(false);
  const [idVenta, setIdVenta] = useState("");
  const [mostrarCheckOut, setCheckOut] = useState(false);
  let datosComprador = { nombre: "", direccion: "", email: "" };
  let cantOK = true;

  const continuarCompra = () => {
    setFinalizarCompra(true);
  };

  const guardarNombre = (e) => {
    datosComprador.nombre = e.target.value;
  };

  const guardarDireccion = (e) => {
    datosComprador.direccion = e.target.value;
  };

  const guardarEmail = (e) => {
    datosComprador.email = e.target.value;
  };

  const guardarVenta = () => {
    const sellCollection = collection(db, "ventas");
    addDoc(sellCollection, {
      datosComprador,
      items: cart,
      total: totals.total,
      time: serverTimestamp(),
    }).then((result) => {
      setIdVenta(result.id);
    });
  };

  const finalizarCompra = () => {
    actualizarStock();
    guardarVenta();
    clear();
    setCheckOut(true);
  };

  const validarStock = (id, stockActual, cantidad) => {
    if (!(stockActual - cantidad >= 0)) {
      cantOK = false;
    }
    cart[cart.findIndex((ele) => ele.id == id)].stock = stockActual;
  };

  const consultarStock = (id, cantidad) => {
    const productosCollection = collection(db, "productos");
    const refDoc = doc(productosCollection, id);

    getDoc(refDoc)
      .then((ele) => {
        validarStock(id, ele.data().stock, cantidad);
      })
      .catch(() => console.log("error"));
  };

  const actualizarStock = () => {
    cart.forEach((ele) => {
      const docReference = doc(db, "productos", ele.id);
      updateDoc(docReference, { stock: ele.stock - ele.quantity });
    });
  };

  return idVenta ? (
    <div style={estilos.tableContainer}>
      <CheckOut id={idVenta} />
    </div>
  ) : cart.length < 1 ? (
    <div>El carrito esta vacio</div>
  ) : (
    <>
      <div
        style={
          !isSetFinalizarCompra
            ? estilos.mostrarArticulos
            : estilos.ocultarArticulos
        }
      >
        <h2>Articulos en el carrito:</h2>
        <div style={estilos.tableContainer}>
          <ContenidoCarrito />
        </div>
        <div style={estilos.botonesContainer}>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => navigate("/productos")}
            >
              Agregar mas poductos
            </Button>
            <Button variant="outlined" color="neutral" onClick={() => clear()}>
              Vaciar Carrito
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={continuarCompra}
            >
              Continuar con la compra
            </Button>
          </ThemeProvider>
        </div>
      </div>

      <div
        style={
          isSetFinalizarCompra ? estilos.formularioON : estilos.formularioOFF
        }
      >
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
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="neutral" onClick={finalizarCompra}>
            Finalizar Compra
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Carrito;

const estilos = {
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
    width: "40%",
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
