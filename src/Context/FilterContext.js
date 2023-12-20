import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppProviderValue } from "./AppContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext=createContext();

const initial={
    filter_products:[]
};

export const FilterContextProvider=({children})=>{
    const {products}=useAppProviderValue();

    const [state,dispatch]=useReducer(reducer,initial);

    useEffect(()=>{
        dispatch({type:"initial-filter",payload:products})

    },[products])

    return(
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterProviderValue=()=>{
    return useContext(FilterContext);
}