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

    const removetocart=(product)=>{
        console.log("remove item is",product);
        dispatch({type:"removetocart",payload:product});
    }

    return(
        <CartContext.Provider value={{...state,addtocart,removetocart}}>
            {children}
        </CartContext.Provider>
    )

};
export const useCartProviderValue=()=>{
    return useContext(CartContext);
}

