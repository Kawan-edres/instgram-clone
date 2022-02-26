import React from 'react'
import { Avatar } from '@mui/material'
import images from "./Images"
import {ReactComponent as Spin} from "../Assets/icons/spin.svg";

const ProfileDetails = () => {
  return (
    <div className='flex items-center  mt-[10%] border-b border-mGray'>
    <Avatar className='ml-16' sx={{ width: 150, height: 150 }} src={images[0]} />

{/* left */}
    <div className='flex flex-col ml-[150px]'>
    {/* top */}
        <div className='flex  items-center '>
            <h2 className='mr-4 text-3xl font-thin'>kawan_idrees</h2>
            <button className='mr-3 px-2 py-1 text-sm rounded-sm bg-white border-mGray border'>Edit Profile</button>
            <Spin />
        </div>
     {/*middle  */}
     <div>
         <ul className='flex justify-between items-center mt-5 '>
             <li><span className='font-semibold'>139</span> posts</li>
             <li><span className='font-semibold'>189</span> followers</li>
             <li><span className='font-semibold'>139</span> following</li>
         </ul>
     </div>

     {/* bottom */}
     <div className='flex flex-col mt-5 font-semibold'>

     <p>Kawan Idrees</p>
     <p>💻 Eng Kawan 💻</p>

     </div>
    </div>

    </div>
  )
}

export default ProfileDetails