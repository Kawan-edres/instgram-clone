import React from 'react';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const navigate=useNavigate();
  const back=()=>{
    navigate(-1);
  }
  return( 
  <div onClick={back} className='h-screen w-screen bg-black/40 fixed top-0 left-0 z-10'>


  </div>);
};

export default Posts;
