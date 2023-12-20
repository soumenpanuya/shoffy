import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate(-1);
            
        }, 3000);
    },[])
  return (
    <div>
      <p>Page not fount..........</p>
    </div>
  )
}

export default ErrorPage;
