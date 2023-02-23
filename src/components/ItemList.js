import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
      <div>
        {productos.map( (actual)=>{
          return (
            //si dejo el p de aca abajo funciona ok, me imprime uno por aca producto q tengo.
            //<p>hasta aca llega bien</p>
            //ahora lo cambio por el componente sencillo, sin props, sin nada y se me cuelga.
            <Item />
          )
        })}
      </div>
    )
  }

export default ItemList

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }