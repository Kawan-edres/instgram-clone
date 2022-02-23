import React, { useEffect, useState } from 'react'
import Story from './Story'
import images from "./Images"

const StoryReel = () => {

 
  return (

   

   
    
   
  <div   className=' shadow-story cursor-pointer border-gray border shadow-lg h-[7.5] w-[38rem] flex  items-center overflow-x-hidden thousnd:ml-10  '>
  

    <Story
    img={images[0]}
    title={"kawan_id"}
     />
     

     <Story
    img={images[1]}
    title={"Milad_id"}
     />

    <Story
    img={images[2]}
    title={"Hana-id"}
     />
      <Story
    img={images[3]}
    title={"kawan_id"}
     />
      <Story
    img={images[4]}
    title={"kawan_id"}
     />
     

     <Story
    img={images[5]}
    title={"Milad_id"}
     />

    <Story
    img={images[6]}
    title={"Hana-id"}
     />

     

    
     
    
    </div>
   

  )
}

export default StoryReel