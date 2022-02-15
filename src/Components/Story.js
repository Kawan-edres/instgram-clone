import React from 'react'
import { Avatar } from '@mui/material';
import "./Story.css"



const style={
   
}

const Story = ({img,title}) => {
  return (
    <div 
     className='relative  bg-center bg-cover bg-no-repeat w-[100px] p-[16px] flex flex-col items-center] '>
     <div className='story w-[70px]  rounded-full '>

     <Avatar sx={{ width: 70, height: 70 }} src={img} className='Avatar'/>
     </div>
    <h4 className='text-center'>{title}</h4>

    </div>
  )
}

export default Story