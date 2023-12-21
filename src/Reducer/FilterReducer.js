
const reducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case "initial-filter":{
            return{
                ...state,
                all_products:[...payload],
                filter_products: [...payload]

            }
        }
        case "updatefilter":{
            const {name,value,checked}=payload;
            const updatefilter={...state.filter};
            if(name==="category"){
                if(checked)
                {
                    updatefilter[name]=[...updatefilter[name],value];
                }else{
                    updatefilter[name]=updatefilter[name].filter((el)=>{
                        return el!==value
                    })
                }
            }else{
                updatefilter[name]=value;
            }
            return{
                ...state,
                filter:updatefilter
            }
        }
        case "updatefilterlist":{
            const {all_products}=state;
            const {text,category,price}=state.filter;           
                let newlist =[...all_products];
                if(text){
                    newlist= newlist.filter((el)=>{
                        return el.title.toLowerCase().includes(text.toLowerCase())
                    })   
                }
                
                if(category.length>0){ // is all added in category ten use(category !=="all") for all select...
                    newlist= newlist.filter((el)=>{
                        return category.includes(el["category"])
                    });
                    
                }
                if(price){
                    newlist=newlist.filter((el)=>{
                        return el.price<=price;
                    })
                }
                return{
                    ...state,
                    filter_products:newlist
                }
            
        }
        default:return state;

    }
}

export default reducer;

