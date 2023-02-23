import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
      <div>
        {productos.map( (actual)=>{
          return (
            <Item/>
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