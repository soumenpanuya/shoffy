import React from 'react';
import styled from 'styled-components';
import { useAppProviderValue } from '../Context/AppContext';
import ItemCard from './ItemCard';

const ProductContainer = () => {
  const {products,isLoading}=useAppProviderValue();
  console.log(isLoading)
  return (
    <Wrapper>
      {isLoading && <h1>Page is loading ...</h1>}
      {!isLoading && products.map((item,i)=><ItemCard key={i} item={item} />)}
    </Wrapper>
  )
}

export default ProductContainer;


const Wrapper=styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 3rem 2rem 4rem 22rem;
`
