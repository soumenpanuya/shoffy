import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer"

const CartContext=createContext();

const getcart=()=>{
    const newcart=localStorage.getItem("cart");
    if(newcart)
    {
       const cart=JSON.parse(newcart);
        return cart;
    }
    return []
}

const initial={
    cart:getcart(),
    total_amount:0
}

export const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initial);

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(state.cart));

    },[state.cart]);

    

    const addtocart=(amount,product)=>{
        dispatch({type:"addtocart",payload:{amount,product}})
    }

    const removetocart=(product)=>{
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

