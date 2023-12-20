import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <Wrapper >
        <div className='container'>
            <h1>Sign in</h1>
            <form >
                <input  type='email'
                    placeholder='Enter  email' 
                    required
           
                />

                <input  type='password'
                    placeholder='Enter Password'
                    required
            
                />
                 <button>Sign in</button>
             </form>

            <Link to="/signup"><p >Or Sign Up instead</p></Link>

        </div>
      
    </Wrapper>
  )
}

export default SigninPage;

const Wrapper=styled.div`

    display: flex; 

    .container{
        display: flex;
        flex-direction: column;
        padding: 2rem;
        margin: 0 auto;

        h1{
            font-size: 4rem;
            color: rgb(180, 12, 40);
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin: 3rem 0;

            input{
                font-size: 2rem;
                padding: 1rem;
                border-radius: 10px;
                border: 1px solid blue;
                outline: none;
                background-color: rgb(209, 231, 250);

            }
        }

        button{
            padding: 1rem;
            font-size: 2rem;
            border-radius: 10px;
            background-color: rgba(0, 0, 128, 0.568);
            outline: none;
            border: none;
            font-weight: 600;
            color: white;
            cursor: pointer;
        }

        a{
            font-size: 1.5rem;
            font-weight: 600;
            text-decoration: none;
            color: rgb(44, 44, 44);
        }


    }

`
