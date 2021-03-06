import React, { useState } from "react";
import NavBar from "./NavBar";
import {useLocation } from "react-router-dom";

const Header = () => {

  
  return (
    <header className=" shadow-sm border-b border-mGray  h-16 mt-0 overflow-visible  fixed top-0 left-0 right-0 z-10 bg-white    ">
    <nav className=" max-w-[1000px] mt-4 mx-auto flex	 justify-between items-center h-10 sm:w-[80git ]  ">
      <div className="h-full  ml-[7px]" >
        <img className="mainLogo h-7 w-27 mt-2 object-contain  cursor-pointer"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

   
      <form className="search h-[36px]  min-w-[140px] w-[30%]  flex short:hidden ml-2 	 ">
      
        <input  className="py-[3px] px-[16px] w-full rounded-md bg-gray flex-grow-1 outline-none" type="text" placeholder="    Search"  />
      
      </form>
      
      <div className="flex h-8 w-96 ">
      <NavBar exact to="/home" iconName="home" dot   />
      <NavBar exact to="/inbox" iconName="inbox" badge={7} />
      <NavBar exact to="/create/posts" iconName="posts"  />
      <NavBar exact to="/explore" iconName="explore"   />
      <NavBar exact to="/notifications" iconName="notifications" dot />
      <NavBar exact to="" iconName="profile"  />

      
      </div>
      
      </nav>
    </header>
  );
};

export default Header;
