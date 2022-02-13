import Explore from "../Pages/Explore";
import Notifications from "../Pages/Notifications";
import Home from "../Pages/Home";
import Inbox from "../Pages/Inbox";
import Posts from "../Pages/Posts";
import { Routes, Route,  useLocation } from "react-router-dom";

const Main = () => {
    const location=useLocation();

  return (
    
      <main className="h-screen max-w-[1000px] mx-auto mt-16   ">
          <Routes location={location}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/inbox" element={<Inbox />}></Route>
            <Route path="/create/posts" element={<Posts />}></Route>

            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
          </Routes>
          
        </main>
    
  );
};

export default Main;
