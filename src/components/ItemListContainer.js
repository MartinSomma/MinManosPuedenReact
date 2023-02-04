
export const ItemListContainer = (props) =>{
    return( 
        <>
        <div style={estilos.listaContenedor}>
            <ul style={estilos.ul}>
                <li><a style={estilos.a} href="#">Inicio</a></li>
                <li><a style={estilos.a} href="#">Productos</a></li>
                <li><a style={estilos.a} href="#">Quienes Somos</a></li>
                <li><a style={estilos.a} href="#">Como Comprar</a></li>
                <li><a style={estilos.a} href="#">Contacto</a></li>
            </ul>
            <p style={estilos.mensaje}>{props.greeting}</p>
        </div>
            
        </>
    )
}


const estilos = {
    listaContenedor: {
        display: "flex",
        alignItems: "center"
    },
    ul: {
      margin: 0,
      padding: 0,
      paddingRight: 80,
      gap: 20,
      height: 100,
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    a: {
      textDecoration: "none",
      color: "grey",
      //fontFamily: "Arial, Courier New, monospace",
    },
    mensaje: {
        style: "bold",
        marginRight: 20
        
    }
  };