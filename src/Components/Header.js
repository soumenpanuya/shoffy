import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { useAppProviderValue } from '../Context/AppContext';

const Header = () => {

  const {user}=useAppProviderValue();
  return (
    <>
    
    <MainHeader>
      <h1>Shoffy</h1>
      <nav>
          <ul>
            <li><Link to="" className='navitem'><img  src='https://cdn-icons-png.flaticon.com/128/609/609803.png' alt='Home' /><span>Home</span></Link></li>

            {user &&  <li className='navitem'><img src='https://cdn-icons-png.flaticon.com/128/859/859270.png' /><span>My orders</span></li>}

            {user && <li  > <Link to="cart" className='navitem'><img src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png' /><span>Cart</span></Link></li>}

            <li><Link to="signin" className='navitem'><img src='https://cdn-icons-png.flaticon.com/128/2050/2050106.png'  /><span>Sign in</span></Link></li>

            {user && <li className='navitem'><img src='https://cdn-icons-png.flaticon.com/128/2115/2115284.png' /><span>Log out</span></li>}
          </ul>

      </nav>
    </MainHeader>
    <Outlet />
    </>
  )
}

export default Header;

const MainHeader=styled.header`

    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem 1rem 5rem;
    font-weight: 500;
    color: rgb(255, 0, 170);
    box-shadow: 0px 1px 15px  rgba(180, 178, 178,0.5);

    /* Link tag or a tag are same... */
    
    nav{

      ul{
        list-style: none;
        color: rgb(0, 102, 255);
        display: flex;
        gap: 2.5rem;
        font-size: 1.5rem;
        font-weight: 700;

        .navitem{
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          color: rgb(0, 110, 255);

          img{
              height: 3rem;
          }
        }
      }
    }

    

`;
