import React from 'react';
import styled from 'styled-components';
import { useAppProviderValue } from '../Context/AppContext';
import ItemCard from './ItemCard';
import { useFilterProviderValue } from '../Context/FilterContext';

const ProductContainer = () => {
  const {isLoading}=useAppProviderValue();

  const {filter_products}=useFilterProviderValue();
  return (
    <Wrapper>
      {isLoading && <h1>Page is loading ...</h1>}
      {!isLoading && filter_products.map((item,i)=><ItemCard key={i} item={item} />)}
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
