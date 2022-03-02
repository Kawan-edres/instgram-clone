import React from 'react'
import ProfileDetails from "./ProfileDetails"
import images from "../Components/Images"
import ExploreItems from './ExploreItems'
import MyProfileItems from './MyProfileItems'


const MyProfile = () => {
  return (
    <>
    {/* top */}
    <div>
      <ProfileDetails />
    </div>
    {/* Bottom */}
    <div className='mt-10 border-t  border-mGray grid grid-cols-3 cursor-pointer'>

     
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
  </>
  )
}

export default MyProfile