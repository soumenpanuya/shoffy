import React from 'react'
import styled from 'styled-components';
import { useCartProviderValue } from '../Context/CartContext';

const ItemCard = ({item}) => {
  const {addtocart}=useCartProviderValue();
    const {image,title,price}=item
  return (
    <Wrapper >
    <div className='img-container'>    
      <img  src={image} />
    </div>

    <p className='title'>{title.slice(0,18)}....</p>

    <p className='price'>&#8377; {price}</p>

    <button onClick={()=>{addtocart(price,item)}}>Add To Cart</button>
    
  </Wrapper>
  )
}

export default ItemCard;

const Wrapper=styled.div`

    width: 26rem;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 15px rgb(201, 199, 199),-3px -3px 15px rgb(201, 199, 199);
    gap: 1rem;
    min-height: 40rem;
    .img-container{
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
        width: 100%;
        
        }
    }

    .title{
        font-size: 2rem;
        align-self: flex-start;
        font-weight: 500;
    }
    .price{
        width: 100%;
        font-size: 2.5rem;
        font-weight: 700;
        /* border: 1px solid red; */
        color: rgba(12, 11, 11, 0.863);
        align-self: flex-start;
    }

    button{
        width: 100%;
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
        font-weight: 400;
        border-radius: 7px;
        background-color: #7064e5;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
    }

`

