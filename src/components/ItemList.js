import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
      <div style={styles.container}>
        {productos.map( (ele)=>{
          return  <Item key={ele.id} producto={ele}/>;
        })}
      </div>
    )
  }

export default ItemList

const styles = {
    container:{
      margin: "auto",
      width: "95%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }
  }