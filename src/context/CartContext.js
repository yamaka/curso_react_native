import React, { createContext, useState, useEffect } from "react";


//Consumer
const CartContext = createContext({});
export default CartContext;
//Provider
export const CartProvider = ({ children }) => {
  const [cartStateContext, setCartStateContext] = useState({
   id:null,
   cursos:[]
  });

  const addToCart = (curso) =>{
    const {cursos} = cartStateContext;
    const cursoFiltro = cursos.find(c => c.id == curso.id);
    if(!cursoFiltro){
        const newCursos = [...cursos, curso]; 
        setCartStateContext({...cartStateContext, ...{cursos: newCursos}});
    }
  }

  return (
    <CartContext.Provider
      value={[cartStateContext, setCartStateContext, addToCart]}
    >
      {children}
    </CartContext.Provider>
  );
};



