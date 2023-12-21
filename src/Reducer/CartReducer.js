const reducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){

        case "addtocart":{
            let newcart={
                ...payload.product,
                qty:1
            };
            return {
                ...state,
                cart:[...state.cart,newcart]
            }
        }

        default:return state;
    }
};

export default reducer;