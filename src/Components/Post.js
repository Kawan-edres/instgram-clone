import React, { useState } from "react";
import { Avatar } from "@mui/material";
import images from "./Images";

import { ReactComponent as More } from "../Assets/icons/more.svg";
import { ReactComponent as HeartO } from "../Assets/icons/outline/heart.svg";
import { ReactComponent as HeartF } from "../Assets/icons/filled/heart.svg";

import { ReactComponent as Comment } from "../Assets/icons/comment.svg";
import { ReactComponent as Share } from "../Assets/icons/share.svg";

import { ReactComponent as SaveO } from "../Assets/icons/outline/save.svg";
import { ReactComponent as SaveF} from "../Assets/icons/filled/save.svg";

import { ReactComponent as Emoji} from "../Assets/icons/emoji.svg";



const Post = ({img,avatar ,title}) => {
  const [heartClick, setheartClick] = useState(false);
  const [saveClick, setSaveClick] = useState(false);


  console.log(heartClick);
  return (
    <div className="flex flex-col w-[38rem] mt-10 h-auto border-gray border  ">
      {/* top */}
      <div className="flex justify-between h-16 items-center border-gray border">
        <div className="flex items-center ml-3">
          <Avatar 
            sx={{ width: 40, height: 40 }}
            src={avatar}
            className="Avatar"
          />
          <p className="ml-3">{title}</p>
        </div>
        <div className="mr-3">
          {" "}
          <More />
        </div>
      </div>

      {/* middle */}
      <div className="">
        <img
          className="h-[600px] w-full"
          src={img}
          alt=""
        />
      </div>

      {/* bottom */}
    
      <div className="flex mt-4 ml-3 justify-between  ">
        <div className="flex justify-between w-32 cursor-pointer ">
        
         
          <button onClick={() => setheartClick(!heartClick)} >
          {heartClick? <HeartF className="text-black"   />:<HeartO className="text-black"   />}
          </button>
          <Comment className="text-black"  />
          <Share className="text-black" />
        </div>  
        <button onClick={()=>setSaveClick(!saveClick)}>
        { saveClick?
        <SaveF className="mr-3 text-black" />
        :<SaveO className="mr-3 text-black" />

        }

        </button>
      </div>

      <div className="mt-5 ml-3 flex ">
          <Avatar sx={{ width: 23, height: 23 }}src={images[4]}className="Avatar"/>
          <p className="ml-3">liked by  <span className="font-bold hover:underline cursor-pointer">yusf_Jasm</span > and <span className="cursor-pointer font-bold"> 1,828 others</span></p>
      </div>
     
      <div className="mt-5 ml-3 flex-col ">
       <p className="text-lg text-gray1">View All 37 Comments</p>
       <p className="text-gray1 text-sm">4 Hours Ago</p>
      </div>

    <div className="border-t border-gray mt-2 flex items-center ">
      <div className="flex justify-between   p-4  ">
      <div className="flex">
      <Emoji />
      <input   type="text" className="ml-3 w-[31rem] outline-none " placeholder="Add Comment" name="" id="" />
      </div>
      <button className="text-buttonBlue">Post</button>
      </div>
      </div>

      


    </div>
  );
};

export default Post;
