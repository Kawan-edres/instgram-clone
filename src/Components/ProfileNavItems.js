import React from 'react'
import { ReactComponent as Profile } from "../Assets/icons/profile/profile.svg";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const ProfileNavItems = ({text,icon}) => {
  return (
            <div className="flex justify-start items-center hover:bg-black/5">
                <div className="h-[18px] w-[18px] m-3 text-white  ">{icon}</div>
                <div><span className="text-black">{text}</span></div>
            </div>
  );
}

export default ProfileNavItems