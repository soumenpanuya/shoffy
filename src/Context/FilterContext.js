import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppProviderValue } from "./AppContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext=createContext();

const initial={
    all_products:[],
    filter_products:[],
    filter:{
        text:"",
        category:""
    }
};

export const FilterContextProvider=({children})=>{
    const {products}=useAppProviderValue();

    const [state,dispatch]=useReducer(reducer,initial);


    useEffect(()=>{
        dispatch({type:"initial-filter",payload:products})

    },[products])

    const updatefilterkey=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log("name value",name, value)

        dispatch({type:"updatefilter",payload:{name,value}})

    }

    useEffect(()=>{
        dispatch({type:"updatefilterlist"})

    },[state.filter])

    return(
        <FilterContext.Provider value={{
            ...state,
            updatefilterkey
            }}>


            {children}
        </FilterContext.Provider>
    )

}

export const useFilterProviderValue=()=>{
    return useContext(FilterContext);
}