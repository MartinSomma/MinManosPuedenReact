import React, { useContext, useState } from "react";
import { CustomContext } from "../Context/CustomContext";
import { useNavigate } from "react-router-dom";
import ContenidoCarrito from "./Tabla";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckOut from "./CheckOut";
import FormFinalizar from "./FormFinalizar";

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
  const { clear, cart } = useContext(CustomContext);
  const [isSetFinalizarCompra, setFinalizarCompra] = useState(false);
  const [idVenta, setIdVenta] = useState("");

  const devolverIdVenta = (id) => {setIdVenta(id)} 

  
  const continuarCompra = () => {
    setFinalizarCompra(true);
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
        <FormFinalizar devolverIdVenta = {devolverIdVenta} />
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
