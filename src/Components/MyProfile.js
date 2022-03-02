import React from 'react'
import ProfileDetails from "./ProfileDetails"
import images from "../Components/Images"
import MyProfileItems from './MyProfileItems'
import { Router,Route, Outlet } from 'react-router-dom'
import {ReactComponent as P1} from "../Assets/icons/profile1.svg"
import {ReactComponent as P2} from "../Assets/icons/profile2.svg"
import {ReactComponent as P3} from "../Assets/icons/profile3.svg"
import {ReactComponent as P4} from "../Assets/icons/profile4.svg"




const MyProfile = () => {
  return (
    <>
    {/* top */}
    <div>
      <ProfileDetails />
    </div>
    {/* Bottom */}


    <div className='mt-10 border-t  border-mGray  cursor-pointer '>

      <div className=' w-full mx-auto  flex justify-evenly px-32'>
      <p ><P1 className='inline' />Posts</p>
      <p ><P2 className='inline' />Vedios</p>
      <p ><P3 className='inline' />Saved</p>
      <p ><P4 className='inline' />Tagged</p>



      </div>
     <div className='grid grid-cols-3'>
    <MyProfileItems img={images[0]} />
    <MyProfileItems img={images[1]} />
    <MyProfileItems img={images[2]} />
    <MyProfileItems img={images[3]} />
    <MyProfileItems img={images[4]} />
    <MyProfileItems img={images[5]} />
    <MyProfileItems img={images[6]} />
    <MyProfileItems img={images[7]} />
    <MyProfileItems img={images[8]} />
    <MyProfileItems img={images[9]} />
    <MyProfileItems img={images[10]} />
    <MyProfileItems img={images[11]} />
    <MyProfileItems img={images[12]} />
    <MyProfileItems img={images[13]} />
    <MyProfileItems img={images[14]} />
    <MyProfileItems img={images[15]} />
    <MyProfileItems img={images[16]} />
    <MyProfileItems img={images[0]} />
    <MyProfileItems img={images[1]} />
    <MyProfileItems img={images[2]} />
    <MyProfileItems img={images[3]} />
    <MyProfileItems img={images[4]} />
    <MyProfileItems img={images[5]} />
    <MyProfileItems img={images[6]} />
    <MyProfileItems img={images[7]} />
    <MyProfileItems img={images[8]} />
    <MyProfileItems img={images[9]} />
    <MyProfileItems img={images[10]} />
    <MyProfileItems img={images[11]} />
    <MyProfileItems img={images[12]} />
    <MyProfileItems img={images[13]} />
    <MyProfileItems img={images[14]} />
    <MyProfileItems img={images[15]} />

    </div>

    </div>
  </>
  )
}

export default MyProfile