import React  , {createContext, useState}from 'react';
export const Cart= createContext(null)
 export const Carts=(props)=>{

   const [items, setItems] = useState([]);
    return(
        <>
        <Cart.Provider value={{items, setItems}}>
            {props.children }

        </Cart.Provider>
        </>
    )
}
