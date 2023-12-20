import { createContext, useContext, useEffect, useReducer } from "react";
import { productreducer } from "../Reducer/productreducer";

const AppContext=createContext();

const initialstate={
    isLoading:false,
    products:[],
    user:null
}

export const AppContextProvider=({children})=>{
    const [state,dispatch]=useReducer(productreducer,initialstate);

    const fetchapi= async()=>{
        dispatch({type:"loading"});
        try {
            const response=await fetch("https://fakestoreapi.com/products/");
            const data=await response.json();
            dispatch({type:"apidata",payload:data})
        } catch (error) {
            
        }

    };

    useEffect(()=>{
        fetchapi();
    },[])

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )

};

export const useAppProviderValue=()=>{
    return useContext(AppContext);
}