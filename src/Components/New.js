import React from 'react'
import ReactDom from "react-dom";
import {useNavigate} from "react-router-dom"


const New = () => {
    const back=useNavigate();
  return ReactDom.createPortal (
      <>
      <div  onClick={()=>back("/inbox")} className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[10000]'></div>
      <div>New</div>
    </>,document.getElementById("inboxPortal")
  )
}

export default New