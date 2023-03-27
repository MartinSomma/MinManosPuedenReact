import React from 'react'

const ComoComprar = () => {
  return (
    <div>
      <section>
                <h1>Como Comprar</h1>
            </section>
            <section className="comoComprar  ">
              
                <div>
                  <p className="comoComprarPregunta">¿Cómo hago una compra? </p>

                  <p className="comoComprarRespuesta">Podes realizar la compra mediante el carrito que figura en cada articulo indicando la cantidad elegida. 
                  También a través del botón de wsp podes comunicarte directamente con nosotros y enviarnos el pedido por ese medio.
                  </p>

                <p className="comoComprarPregunta">Pagos</p>
                <p className="comoComprarRespuesta">  
                  Contamos con los siguientes medios de pago :
                  - Efectivo contra entrega ( solo para CABA y algunas zonas de provincia de Buenos Aires. Consulta por tu zona)
                  - Deposito o Transferencia Bancaria 
                  - Mercado Pago ( Tarjetas de Crédito y Debito )
                </p>
                  
                <p className="comoComprarPregunta">Ventas Mayoristas</p>

                <p className="comoComprarRespuesta">                  
                  No tenemos monto mínimo de Compra.
                  1-Las ventas mayoristas son a partir de una determinada cantidad de piezas de un mismo modelo, pueden ser 6, 12 o 20 unidades dependiendo de la pieza elegida, en ese caso el precio disminuye y el mismo se encuentra reflejado en la parte superior de cada articulo de la pagina. Dentro de esas cantidades podes combinar colores siempre que sean del mismo modelo !
                  2- Para descuento mayoristas por bulto cerrado   ¡ Chatea con nosotros y consúltanos !
                </p>

              </div>
              <div>

                <p className="comoComprarPregunta">Envíos</p>
                  
                <p className="comoComprarRespuesta">  
                  Realizamos envíos a todo el país.
                  
                  - Los envíos al interior del país y algunas zonas de Buenos Aires se realizan por transporte ( Consultar  empresas con las que trabajamos y cargo adicional por despacho). 
                  - Los envíos a CABA se realizan por auto o moto, dependiendo las dimensiones de la caja. 
                  Todos los envíos son a cargo del cliente quien lo abona en el momento que le llega la mercadería. 
                  No se hacen despachos los fines de semana ni feriados.
                  En caso de rotura o perdida de la mercadería el cliente deberá reclamar a la empresa de transporte. 
                </p>

                <p className="comoComprarPregunta">Retiro de Mercadería</p>
                  
                <p className="comoComprarRespuesta">Podes retirar la mercadería por CABA o por zona sur Canning. 
                </p>

                <p className="comoComprarPregunta">Cambios</p>

                <p className="comoComprarRespuesta">Solo se realizaran cambios de mercadería por fallas de fabricación. Los cambios se realizan dentro de las 48 hs de realizada la compra y por la misma pieza o similar .
                  En las devoluciones o cambios de mercadería, el envío corre por cuenta del cliente.
                  No se realizan devoluciones de dinero.
                </p>
              </div>
                
            </section>
    </div>
  )
}

export default ComoComprar
