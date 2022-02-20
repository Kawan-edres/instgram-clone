import {useState} from 'react'
import { Avatar, imageListItemBarClasses } from "@mui/material";


const RightBottomSide = ({title,img}) => {
    const [follow,setFollow]=useState(false);

    const handleFollow=()=>{
        setFollow(!follow);
        console.log(follow);
    }
  return (
    <div className="w-full h-auto flex items-center justify-between   ">
    <div>
      <div className=" mb-5 flex justify-between items-center w-72">
       
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <Avatar
            sx={{ width: 35, height: 35 }}
            src={img}
          />
          <div className="flex flex-col ml-3 justify-center">
            <p  className="text-sm">{title}</p>
            <p className='text-sm text-mGray'>Followed by k_salih406</p>
          </div>
        </div>

        <button onClick={handleFollow} className={`${follow?"text-mGray":"text-buttonBlue font-semibold text-sm"}`}>
        {follow?"Following":"Follow"}
        
        </button>
      </div>
    </div>
  </div>
  )
}

export default RightBottomSide