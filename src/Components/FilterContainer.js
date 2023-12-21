import styled from "styled-components";
import { useFilterProviderValue } from "../Context/FilterContext";

const FilterContainer = () => {

  const {all_products,updatefilterkey}=useFilterProviderValue();

  function filterdata(type){
    let res=all_products.map((el,i)=>{
      return el[type]
    });
    const result=[...new Set(res)];
    return result;

  }

  const filtercategory = filterdata("category");

  return (
    <Wrapper >
        <h1>Filter</h1>

        <form >
          <label htmlFor='price' >Price: 5000 </label>
          <input type='range' id='price' max="10000"  step="100"  />
        </form>

        <h1>Catagory</h1>

        <div >
          {filtercategory.map((el,i)=>(
            <div className='filteritem' key={i} >
            <input type='checkbox' id={el} name="category" value={el}
             onClick={updatefilterkey}/>
            &nbsp;
            <label htmlFor={el}>{el}</label>
          </div>

          ))}

        </div>
        
      </Wrapper>
  )
}

export default FilterContainer;

const Wrapper=styled.div`

width: 20rem;
    background-color: rgb(224, 222, 222);
    position: fixed;
    left: 0;
    top: 35%;
    border-radius: .5rem;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.788);
    gap: 0.5rem;

    form{
      font-size: 1.5rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
       
    }

    .filteritem{

      font-size: 1.5rem;
      font-weight: 500;
      margin: 0.5rem 0 ;
      input{
        transform: scale(1.2);
      }
    }

`
