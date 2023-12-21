import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer"

const CartContext=createContext();

const initial={
    cart:[],
    total_amount:0
}

export const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initial);
    console.log("new cart",state)

    const addtocart=(amount,product)=>{
        console.log("addtocart",amount,product)
        dispatch({type:"addtocart",payload:{amount,product}})
    }

    return(
        <CartContext.Provider value={{...state,addtocart}}>
            {children}
        </CartContext.Provider>
    )

};
export const useCartProviderValue=()=>{
    return useContext(CartContext);
}

