import React from 'react'
import InboxItems from './InboxItems';
import images from "./Images";
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {inboxActions} from '../store/inboxSlice'


const OverLayInboxItems = () => {
    // const [tag,setTag]=useState(false);
    const tag = useSelector(state => state.inbox.isChecked);
    const dispatch  = useDispatch()

    const checkHandler=()=>{
        dispatch(inboxActions.toogle())
        console.log(tag);
    }

    
  return (
    <div className='flex items-center '>

    <InboxItems img={images[0]} name="kawan idrees" />
    <input onChange={checkHandler} type="checkbox" className='h-7 w-7 rounded-full'  />
   
    </div>
  )
}

export default OverLayInboxItems