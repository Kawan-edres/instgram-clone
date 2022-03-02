import Explore from "../Pages/Explore";
import Notifications from "../Pages/Notifications";
import Home from "../Pages/Home";
import Inbox from "../Pages/Inbox";
import Posts from "../Pages/Posts";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MyProfile from "./MyProfile";
import New from "./New";
import ProfilePosts from "./ProfilePosts";
import ProfileVideos from "./ProfileVideos";

const Main = () => {
  const location = useLocation();

  return (
    <main className="h-screen max-w-[1000px] mx-auto mt-16     ">
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/create/posts" element={<Posts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/myprofile" element={<MyProfile />}>
          <Route to="/posts" element={<ProfilePosts />} />
          <Route to="/videos" />
          <Route to="/saved" />
          <Route to="/tagged" />
        </Route>
        <Route path="/new" element={<New />} />
      </Routes>
    </main>
  );
};

export default Main;
