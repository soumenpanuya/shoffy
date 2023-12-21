import React from 'react'
import styled from 'styled-components';
import { useCartProviderValue } from '../Context/CartContext';
import CartItem from '../Components/CartItem';

const CartPage = () => {
    const {cart}=useCartProviderValue();
  return (
    <Wrapper >
        <div className='total'>
            <p>TotalPrice:-1205</p>
            <button>Purchase</button>
        </div>
        <div className='cart_items'>
            {cart.map((el,i)=><CartItem key={i} item={el}/>)}
        </div>
    
  </Wrapper>
  )
}

export default CartPage;

const Wrapper=styled.div`
    padding: 1rem;
   
    .total{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:1.5rem;
        padding:2rem;
        border: 1px solid #f1f1f1;
        position: fixed;
        left: 1rem;
        top: 40%;
        font-size: 2rem;
        font-weight: 500;
        background-color: #f1f1f1;
        border-radius: 0.5rem;

        button{
            font-size: 2rem;
            padding:0.5rem;
            font-weight: 500;
            color: white;
            background-color: #7064e5;
            border: 1px solid #7064e5;
            outline: none;
            border-radius: 10px;
            cursor: pointer;
        }

    }

    .cart_items{

        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        margin: 3rem 2rem 4rem 20rem;
    }

`
