import React from "react";
import { Avatar } from "@mui/material";



const InboxItems = ({img,name}) => {
  
  return (
    <div className=" flex p-3 h-[65px] w-[20rem]  overflow-hidden hover:bg-black/5   short:overflow-hidden ">
      <Avatar sx={{ width: 53, height: 53 }} src={img} />
      <div className="flex flex-col ml-3 overflow-hidden h-16 short:overflow-hidden  ">
        <h3>{name}</h3>
        <p className="text-gray1 font-normal">sent you a message  2h</p>
      </div>
    </div>
  );
};

export default InboxItems;
