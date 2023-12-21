import React from 'react';
import styled from 'styled-components';
import { useCartProviderValue } from '../Context/CartContext';

const CartItem = ({item}) => {
  const {removetocart}=useCartProviderValue();
    const {title,price,image,qty}=item;
  return (
    <Wrapper >
    <div className='img-container'>    
      <img  src={image} />
    </div>

    <p className='title'>{title.slice(0,18)}....</p>

    <div className='price_container'>
      <p className='price'>&#8377; {price}</p>
      <div className='quantity'>
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png'/>
          {qty}
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png'/>
      </div>

    </div>

    <button onClick={()=>{removetocart(item)}}>Remove To Cart</button>
    
  </Wrapper>
  )
}

export default CartItem;


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
    .price_container{
      width: 100%;
      display: flex;
      justify-content: space-between;

      .quantity{
        margin: 0 0.5rem;
        font-size: 2.2rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap:1rem;

        img{
          width: 2.5rem;
          height: 2.5rem;
          cursor: pointer;
        }
      }
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
