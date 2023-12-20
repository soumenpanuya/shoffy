import React from 'react'
import styled from 'styled-components';

const Searchbar = () => {
  return (
    
    <Wrapper  >
        <input  type='search' placeholder='Search By Name'/>
    </Wrapper>
  )
}

export default Searchbar;

const Wrapper=styled.form`

    width: 30%;

    input{
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem;
    outline: none;
    border-radius: 10px;
    background-color: aliceblue !important;
    border: 2px solid blueviolet;
    margin:  1em 0;
    }

`;
