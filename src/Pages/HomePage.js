import React from 'react';
import styled from 'styled-components';
import FilterContainer from '../Components/FilterContainer';
import Searchbar from '../Components/Searchbar';
import ProductContainer from '../Components/ProductContainer';
import { useAppProviderValue } from '../Context/AppContext';

const HomePage = () => {
  const {isLoading}=useAppProviderValue();
  return (
    <Wrapper>
        
      {!isLoading && < FilterContainer />}
      <Searchbar />
      <ProductContainer />
      
    </Wrapper>
  )
}

export default HomePage;


const Wrapper=styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

`;