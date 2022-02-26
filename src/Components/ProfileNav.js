import { ReactComponent as Profile } from "../Assets/icons/profile/profile.svg";
import { ReactComponent as Saved } from "../Assets/icons/profile/saved.svg";
import { ReactComponent as Setting } from "../Assets/icons/profile/setting.svg";
import { ReactComponent as Switch } from "../Assets/icons/profile/switch.svg";
import ProfileNavItems from "./ProfileNavItems";




import {useDispatch} from 'react-redux'
import { navActions } from '../store/navSlice'

function ProfileNav() {
    const dispatch  = useDispatch()

    const navHandler = () =>{
        dispatch(navActions.toggle())
    }

    const arr=[
        {text:'Profile',icon:<Profile />},
        {text:'Saved',icon:<Saved />},
        {text:'Settings',icon:<Setting />},
        {text:'Switch Account',icon:<Switch />},
    ]

  return (
    <>
        <div onClick={navHandler} className="w-screen h-screen bg-white/0 fixed top-0 left-0 "></div>
    

        <div className="flex flex-col rounded-lg absolute z-10  mt-10 h-auto w-60 bg-white border-gray border shadow-lg
         translate-x-[-180px] cursor-pointer">

         {arr.map(item=>{
             return<ProfileNavItems text={item.text} icon={item.icon}/>

         })}

            <div className="border-t-slate-300 border-t hover:bg-black/5">
            <div className="h-9 ml-4 mt-2   ">
                <div><span className="text-black ">Log Out</span></div>
            </div>

            </div>
        </div>
    </>
   
  );
}

export default ProfileNav;
