import React from 'react';
import images from "../Components/Images"
import "../Explore.css"


import ExploreItems from '../Components/ExploreItems';

const Explore = () => {
  return (
  <div className='grid grid-cols-3 mt-[5.5rem] gap-y-6  av:grid-cols-2 av:ml-[12%] av1:!ml-[7%] sm2:!grid-cols-1  sm:!ml-0 '>
  
  
  <ExploreItems images={images[0]}  like={146}  comment={101} />
  <ExploreItems images={images[1]}  like={133}  comment={101} />
  <ExploreItems images={images[6]}  like={200}  comment={101} />
  <ExploreItems images={images[3]}  like={300}  comment={101} />
  <ExploreItems images={images[4]}  like={400}  comment={101} />
  <ExploreItems images={images[5]}  like={146}  comment={101} />
  <ExploreItems images={images[2]}  like={146}  comment={101} />
  <ExploreItems images={images[8]}  like={146}  comment={101} />
  <ExploreItems images={images[9]}  like={146}  comment={101} />
  <ExploreItems images={images[10]} like={146}  comment={101} />
  <ExploreItems images={images[11]} like={146}  comment={101} />
  <ExploreItems images={images[12]} like={146}  comment={101} />
  <ExploreItems images={images[13]} like={146}  comment={101} />
  <ExploreItems images={images[14]} like={146}  comment={101} />
  <ExploreItems images={images[15]} like={146}  comment={101} />
  <ExploreItems images={images[1]} like={146}  comment={101} />
  <ExploreItems images={images[10]} like={146}  comment={101} />
  <ExploreItems images={images[11]} like={146}  comment={101} />
  <ExploreItems images={images[0]}  like={146}  comment={101} />
  <ExploreItems images={images[1]}  like={133}  comment={101} />
  <ExploreItems images={images[6]}  like={200}  comment={101} />
  <ExploreItems images={images[3]}  like={300}  comment={101} />
  <ExploreItems images={images[4]}  like={400}  comment={101} />
  <ExploreItems images={images[5]}  like={146}  comment={101} />
  <ExploreItems images={images[2]}  like={146}  comment={101} />
  <ExploreItems images={images[8]}  like={146}  comment={101} />
  <ExploreItems images={images[9]}  like={146}  comment={101} />
  <ExploreItems images={images[10]} like={146}  comment={101} />
  <ExploreItems images={images[11]} like={146}  comment={101} />
  <ExploreItems images={images[12]} like={146}  comment={101} />
  <ExploreItems images={images[13]} like={146}  comment={101} />
  <ExploreItems images={images[14]} like={146}  comment={101} />
  <ExploreItems images={images[15]} like={146}  comment={101} />
  <ExploreItems images={images[1]} like={146}  comment={101} />
  <ExploreItems images={images[10]} like={146}  comment={101} />
  <ExploreItems images={images[11]} like={146}  comment={101} />

 
    
  </div>);
};

export default Explore;
