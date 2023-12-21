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

        case "removetocart":{
            let newcart=[...state.cart];
            newcart=newcart.filter((el)=>{
                return el.id!==payload.id
            });
            return{
                ...state,
                cart:newcart
            }
        }

        default:return state;
    }
};

export default reducer;