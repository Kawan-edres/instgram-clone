import React from 'react'
import Story from './Story'
import images from "./Images"
import { motion } from 'framer-motion';

const StoryReel = () => {
  console.log(images);
  return (
    
  <div   className=' shadow-story cursor-pointer border-gray border shadow-lg h-[7.5] w-[35rem] flex  items-center overflow-hidden thousnd:ml-10  '>
  
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
    title={"Aram_id"}
     />

    <Story
    img={images[4]}
    title={"Yusf_id"}
     />

    <Story
    img={images[5]}
    title={"Naly_id"}
     />

    <Story
    img={images[6]}
    title={"Hewr_id"}
     />
     
    
    </div>
   

  )
}

export default StoryReel