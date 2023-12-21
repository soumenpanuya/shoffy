
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
            const {name,value}=payload;
            return{
                ...state,
                filter:{
                    ...state.filter,
                    [name]:value   //[name] is used fo dynamic key...
                }
            }
        }
        case "updatefilterlist":{
            const {all_products}=state;
            console.log("update list call",all_products)
            const {text,category}=state.filter;
            console.log("text",text,"category",category)
            if(text || category)
            {
                console.log("under call");
                let newlist =[...all_products];
                if(text){
                    console.log("under text");
                    newlist= newlist.filter((el)=>{
                        return el.title.toLowerCase().includes(text.toLowerCase())
                    })   
                }
                
                if(category){ // is all added in category ten use(category !=="all") for all select...
                    console.log("under category");
                    newlist= newlist.filter((el)=>{
                        return el["category"]===category
                    });
                    
                }

                console.log("new list",newlist);
                    return{
                    ...state,
                    filter_products:newlist
                }
            
            }
        }
        default:return state;

    }
}

export default reducer;

