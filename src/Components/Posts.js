import React, { useState } from 'react'
import { Avatar } from '@mui/material';
import images from "./Images"

import {ReactComponent as More} from "../Assets/icons/more.svg"
import {ReactComponent as HeartO} from "../Assets/icons/outline/heart.svg"
import {ReactComponent as HeartF} from "../Assets/icons/filled/heart.svg"

import {ReactComponent as Comment} from "../Assets/icons/comment.svg"
import {ReactComponent as Share} from "../Assets/icons/share.svg"

import {ReactComponent as SaveO} from "../Assets/icons/outline/save.svg"







const Posts = () => {

    const [click,setClick]=useState(false);
    console.log(click);
  return (
    <div className='flex flex-col w-[38rem] mt-10 h-auto  '>

    {/* top */}
    <div className='flex justify-between h-16 items-center'>
        <div className='flex items-center'>
        <Avatar sx={{ width: 50, height: 50 }} src={images[0]} className='Avatar'/>
        <p className='ml-3'>bazmakani daxily</p>
        </div>
        <div className='mr-3'>  <More  /></div>
        
    </div>

    {/* middle */}
    <div className=''>
        <img className='h-[600px] w-full' src="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274674563_4656680457774333_2577902269419803191_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHvZPES1Rp_Rm8cY2aenFcHjtaoIaFXsgWO1qghoVeyBa14wLSnVQDbc0Ds2eWLn3YEmfrGeiX2ketAibWQzmC_&_nc_ohc=VEi-ziU0rE4AX_iogMP&_nc_ht=scontent.febl5-1.fna&oh=00_AT9mSFooaRABRLTiDJ01MZLeExgfh7RD7qMvH8_Ih-o3lA&oe=621B4C5C" alt="" />
    </div>

    {/* bottom */}
    <div className='flex mt-4 ml-3 justify-between '>
    <div className='flex justify-between w-32 '>
    <div>
    <HeartF onClick={()=>setClick(!click)} />
    </div>
       
        
        <Comment />
        <Share />
    </div>

            <SaveO className='mr-3' />

       

       
    </div>





    

    </div>
  )
}

export default Posts