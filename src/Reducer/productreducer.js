export const productreducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case "loading":{
            return{
                ...state,
                isLoading:true
            }
        }
        
        case "apidata":{
            return{
                ...state,
                isLoading:false,
                products: payload
            }
        }

        default:
            return state;
    }

}