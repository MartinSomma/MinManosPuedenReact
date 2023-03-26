import React, { createContext, useState, useEffect } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totals, setTotals] = useState({ qty: 0, total: 0 })
    const [recuperarCartLS, setRecuperarCartLs] = useState(false)

    const myCart = JSON.parse(localStorage.getItem('miCarrito'))
    

    useEffect(() => {
        if (!recuperarCartLS ){
            setRecuperarCartLs(true)
            if (myCart){
                setCart(myCart)
            }
        } else {
            localStorage.setItem('miCarrito', JSON.stringify(cart))
        }
        
        let qtyInitial = 0;
        let total = 0;
        cart.forEach((product) => {
            qtyInitial += product.quantity;
            total += product.quantity * product.precio;
        });
        setTotals({ qty: qtyInitial, total: total });
        
    }, [cart]);

    const agregarProducto = (producto, cant) => {
        const index = cart.findIndex((ele) => ele.id == producto.id)
        if (index < 0){
            setCart([...cart, {...producto, quantity: cant}])
        } else {
            const cartAux = [...cart]
            cartAux[index].quantity=cant
            setCart(cartAux)
        }
    }

    const getQty = (id) => {
        if (isInCart(id)){
                return cart[cart.findIndex((ele) => ele.id == id)].quantity
        } else {
            return 1
        }
    }


  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CustomContext.Provider
      value={{ cart, totals, removeProduct, clear, agregarProducto, getQty }}
    >
      {children}
    </CustomContext.Provider>
  );
};
