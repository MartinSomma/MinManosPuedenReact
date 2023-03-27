# Proyecto Mis Manos Pueden

Mis Manos pueden es un proyecto de e-commerce desarrollado en el contexto del curso de react de coderhouse



## Tecnologías

- HTML 5

- CSS

- React

- FireStore

  

## Tecnologías

La app consta de 5 paginas:

1. Index.html para mostrar los producto destacados
2. Productos.html para mostrar los productos disponibles
3. QuienesSomos.html la presentacion de las creadoras del empredmiento
4. ComoComprar.html para dar instruccion de uso.
5. Contacto.html para ponerse en contacto.

## Comportamientos

La pagina Inicio muestra en un carrousel los artículos destacados del mes. Luego, desde la pagina de productos se pueder en detalle de cara articulo para luego selección la cantidad a agregar al carrito.

De forma tal de mantener cierta lógica sobre la cantidad en caso de querer agregar unidades de un determinado articulo, cada vez que se mira el detalle se "trae" la cantidad de artículos que hay en el carrito. Siempre se muestra el total. De forma tal que en la vista de detalle siempre se vea al total de unidades, para determinado articulo, ya incluidos en el carrito.

En control para sumar o restar unidades, dos comportamientos adicionales. Si se confirma 0 (cero) como cantidad, elimina el articulo del carrito. Por otro lado, no deja agregar mas unidad que el stock disponible.

En la vista del carrito, se pude revisar los artículos, cantidades, precio y precio total. En caso de ser necesario, se puede borrar algun articulo del carrito.

También hay un botón que lleva a la lista de productos en caso de querer agregar mas artículos y/o unidades.

Para realizar la compra, se presiona el botón de "continuar con la compra" y se solicitan los datos de envio.

Finalmente, luego que la compra es registrada en la base de datos, se confirma la compra con el numero de identificacion asignado.



## Responsive

Esta version no es responsive