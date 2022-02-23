import React from 'react'
import { Avatar } from '@mui/material';
import "./Story.css"

import {motion} from 'framer-motion';
import { useRef,useState,useEffect } from 'react';




const Story = ({img,title}) => {
  return (

    <div   className='relative  bg-center bg-cover bg-no-repeat  p-[16px] flex flex-col items-center '>
     <div className='story  rounded-full '>

     <Avatar sx={{ width: 60, height: 60 }} src={img} className='Avatar'/>
     </div>
    <p className='text-center text-xs'>{title}</p>

    </div>
  )
}

export default Story