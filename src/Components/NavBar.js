import { NavLink, useMatch, useResolvedPath,useLocation } from 'react-router-dom';
import {ReactComponent as HomeO} from '../Assets/icons/outline/home.svg'
import {ReactComponent as HomeF} from '../Assets/icons/filled/home.svg'
import {ReactComponent as InboxO} from '../Assets/icons/outline/inbox.svg'
import {ReactComponent as InboxF} from '../Assets/icons/filled/inbox.svg'
import {ReactComponent as PostsO} from '../Assets/icons/outline/posts.svg'
import {ReactComponent as PostsF} from '../Assets/icons/filled/posts.svg'
import {ReactComponent as ExploreO} from '../Assets/icons/outline/explore.svg'
import {ReactComponent as ExploreF} from '../Assets/icons/filled/explore.svg'
import {ReactComponent as NotificationsO} from '../Assets/icons/outline/notifications.svg'
import {ReactComponent as NotificationsF} from '../Assets/icons/filled/notifications.svg'
import { Avatar } from "@mui/material";
import images from "./Images"





import {useDispatch, useSelector} from 'react-redux'
import { navActions } from '../store/navSlice'
import ProfileNav from './ProfileNav';
const NavBar = ({to,iconName,badge,dot,imgSrc}) => {

  const isNavOpen = useSelector(state => state.nav.isOpen)
    const dispatch  = useDispatch()

    const navHandler = () =>{
        dispatch(navActions.toggle())
    }


  let resolved=useResolvedPath(to);
  const match=useMatch({path:resolved.pathname,end:true});
  return(
    < >
    {
      to?

   
    <NavLink to={to} >

    <div className=' h-full  px-3 relative  overflow-hidden'>
          {/* badge notifications */}
      <div className={badge && badge > 0 ? `flex justify-center items-center text-[9px] min-w-[16px] h-[16px] bg-red-500 right-1 top-0  absolute rounded-full border-white border text-white`:'hidden'}>
                <span>{badge}</span>
      </div>
          {/* dot notification */}
      <div className={dot ? 'w-[5px] h-[5px] left-[21.5px] bottom-0 absolute rounded-full bg-red-500' : 'hidden'}></div>

      
      {iconName==="home" && !match &&<HomeO className="fill-black" />}
      {iconName==="home" && match &&<HomeF className="fill-black" />}
    
      {iconName==="inbox" && !match &&<InboxO className="fill-black" />}
      {iconName==="inbox" && match &&<InboxF className="fill-black" />}
 
 
      {iconName==="posts" && !match &&<PostsO className="fill-black" />}
      {iconName==="posts" && match &&<PostsF className="fill-black" />}

      {iconName==="explore" && !match &&<ExploreO className="fill-black" />}
      {iconName==="explore" && match &&<ExploreF className="fill-black" />}

      
      {iconName==="notifications" && !match &&<NotificationsO className="fill-black" />}
      {iconName==="notifications" && match &&<NotificationsF className="fill-black" />}
      

  
    </div>
      
    </NavLink>

    :
    <div>
    { isNavOpen && <ProfileNav />}
    <button  to={to} onClick={navHandler} className='h-[22px] px-3 relative overflow-visible   '>
        <div className=''>            
            {<Avatar src={images[0]} sx={{ width: 26, height: 26 }} className=' overflow-hidden'/>}

        </div>
    </button>
    </div>
  }

 
    </>

    );
   

};

export default NavBar;
