import React, { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ onAdd , stock , initial }) => {
    const [cantidad, setCantidad] = useState(initial);
    //console.log ('el valor inicial es', initial)

    const AgregarUnidad = () => {
        if (cantidad < stock) {
        setCantidad(cantidad + 1);
        }
    };

    const RestarUnidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.containerButtons}>
                <button style={styles.button} onClick={() => RestarUnidad()}>
                -
                </button>

                <p>{cantidad}</p>
                
                <button style={styles.button} onClick={() => AgregarUnidad()}>
                +
                </button>
            </div>
            <Link to="/carrito" style={styles.vinculo} >
                <button style={styles.buttonAdd} onClick={() => onAdd(cantidad)}>
                Agregar al carrito
                </button>
            </Link>
        </div>
    );
};

const styles = {
    vinculo: {
        
        width: "100%",
    },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
  button: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid grey",
    backgroundColor: "lightgrey",
    color: "black",
    fontSize: "16px",
    margin: "10px",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAdd: {
    width: "70%",
    height: "30px",
    border: "1px solid grey",
    borderRadius: "10px",
    backgroundColor: "lightgrey",
    color: "black",
    fontSize: "14px",
    fontWeight: "normal",
  },
};

export default ItemCount;
