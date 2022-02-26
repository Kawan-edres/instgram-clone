import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const ExploreItems = ({images , like , comment}) => {
  return (
      <>
    <div className='relative sm:!ml-0 '> <img className='h-[300px] w-[300px] short:w-[275px] short:object-contain short:!ml-[13%] sm2:!w-[350px]   sm:!mr-[0%] ' src={images} alt="explore imgs"  />
    <div className='absolute opacity-0 h-[300px] w-[300px] top-0 bg-black/40 hover:opacity-100  av:mt-0   short:!w-[300x] short:!h-[280px] short:!mt-[10px] short:ml-[20px]  sm2:!w-[300px] sm2:!ml-[97px] '>
        <p className='text-white absolute font-bold  top-[50%] left-[30%] '><FavoriteIcon  /> {like}</p>
        <p className='text-white absolute font-bold top-[50%] left-[55%] '><ModeCommentIcon  /> {like}</p>

    </div>

    
    </div>
 
    </>
    )
}

export default ExploreItems