import * as React from 'react';
import  {useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomContext } from "../Context/CustomContext"



function createData(name, precio, cantidad, eliminar) {
  return { name, precio, cantidad, eliminar };
}


function miFuncion(arr){
    return createData(arr.nombre, arr.precio, arr.quantity, arr.id)
}


export default function ContenidoCarrito() {

    const { totals, cart, removeProduct } = useContext(CustomContext);
    const rows = cart.map(miFuncion)


    return (

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.precio}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
                <TableCell align="right">{<button onClick = {()=>removeProduct(row.eliminar)}>x</button>}</TableCell>
              </TableRow>

            ))}
                <TableRow>
                <TableCell><strong>TOTAL</strong></TableCell>
                <TableCell align="right"><strong>${totals.total}</strong></TableCell>
                <TableCell align="right"><strong>{totals.qty}</strong></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }