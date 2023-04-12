import React, { useState, useEffect } from "react";
import {
  getDoc,
  collection,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, precio, cantidad, eliminar) {
  return { name, precio, cantidad, eliminar };
}

function miFuncion(arr) {
  return createData(arr.nombre, arr.precio, arr.quantity, arr.id);
}

const CheckOut = ({ id }) => {
  const [venta, setVenta] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const ventasColl = collection(db, "ventas");
    const refDoc = doc(ventasColl, id);

    getDoc(refDoc)
      .then((ele) => {
        setVenta(ele.data().items);
        setTotal(ele.data().total);
      })
      .catch(() => console.log("error"));
  }, []);

  const rows = venta.map(miFuncion);

  return (
    <>
      <h1>Confirmacion Venta #{id}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.precio}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <strong>TOTAL</strong>
              </TableCell>
              <TableCell align="right">
                <strong>{total}</strong>
              </TableCell>
              <TableCell align="right">
                <strong></strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CheckOut;
