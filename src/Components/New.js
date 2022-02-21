import React from 'react'
import ReactDom from "react-dom";
import {useNavigate} from "react-router-dom"
import { ReactComponent as Close } from '../Assets/icons/close.svg';
import OverLayInboxItems from './OverLayInboxItems';
import { useSelector} from 'react-redux';






const New = () => {
  const tag = useSelector(state => state.inbox.isChecked);

    
    const back=useNavigate();
  return ReactDom.createPortal (
      <>
      <div onClick={()=>back("/inbox")}    className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[100]'></div>
      <div className='fixed rounded-xl top-[18%] left-[37%] z-[1000] bg-white h-[600px] w-[27rem] flex flex-col av:left-[22%] sm2:w-[20rem] sm:!left-[13%]  '>

{/* top */}
      <div className='flex w-full justify-between py-3 px-4 h-28  border-b-gray border-b items-center '>
        <Close onClick={()=>back("/inbox")} />
        <p className='font-semibold'>New Messages</p>
        <button className=' text-buttonBlue'>Next</button>
      </div>

{/* middle */}
      <div className='flex p-3 border-b-gray border-b h-28  font-semibold'> 

      <label htmlFor="search ">To :</label>
      <p className="text-buttonBlue"> {tag?"  @kawan":""}</p>
      
      </div>

      {/* bottom */}
      <div className='flex-col p-3 '>

      <p className='font-normal '>Suggested</p>
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      <OverLayInboxItems />
      


        
       

        
        
        


      </div>


      </div>
    </>,document.getElementById("inboxPortal")
  )
}

export default New