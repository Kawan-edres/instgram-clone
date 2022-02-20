import React from 'react'
import { Avatar } from '@mui/material';
import "./Story.css"

import {motion} from 'framer-motion';
import { useRef,useState,useEffect } from 'react';




const Story = ({img,title}) => {
  return (

    <div  drag="x"
    
     className='relative  bg-center bg-cover bg-no-repeat w-[100px] p-[16px] flex flex-col items-center] '>
     <div className='story w-[60px]  rounded-full '>

     <Avatar sx={{ width: 60, height: 60 }} src={img} className='Avatar'/>
     </div>
    <h4 className='text-center text-xs'>{title}</h4>

    </div>
  )
}

export default Story