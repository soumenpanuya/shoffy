
const reducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case "initial-filter":{
            return{
                filter_products: [...payload]
            }
        }
        default:return state;
    }

}

export default reducer;

