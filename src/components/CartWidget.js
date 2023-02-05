import React from 'react';
import Carrito from '@mui/icons-material/ShoppingCartOutlined';

export function CartWidget (props) {
    return(
        
          
          <div style={estilos.bordeCarrito}>
            <Carrito fontSize="medium"/>
            <span>{props.cant}</span>
          </div>
    
        
    )
}

const estilos = {
    bordeCarrito:{
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px grey",
      borderRadius: 5,
      padding: 10
    }
  }
