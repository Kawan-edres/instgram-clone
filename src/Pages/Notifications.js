import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../Components/Images';
import { Avatar } from '@mui/material';
import InboxItems from '../Components/InboxItems';

const Favourites = () => {
  const back=useNavigate();
  const handl=()=>{
    back("/home")
  }
  return(

  <>
   <div onClick={handl} className='fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-[10]'></div>
  <div className=' fixed right-[35rem] rounded-lg w-[450px] h-[400px] bg-white z-[1000] flex-col overflow-y-scroll'>
   
   <div className='p-2 font-semibold'>This Month</div>
   <div className='flex justify-between items-center'><InboxItems img={images[0]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[1]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[2]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[2]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[3]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[3]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[4]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[4]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[5]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[6]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[7]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[8]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[9]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[10]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[11]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[12]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[13]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[14]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[15]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   <div className='flex justify-between items-center'><InboxItems img={images[16]} /><img className=' mr-3 h-[40px] w-[40px]' src={images[1]} alt="" /></div>
   
   
   </div>

  </>
  );
};

export default Favourites;
