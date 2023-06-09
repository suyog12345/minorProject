import React from "react";
import "./_Header.scss";
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header=({handleToggleSidebar})=>{

   const [input,setInput] = useState('');

   const navigate=useNavigate();

   const handleSubmit=(e)=>{
      e.preventDefault();
      navigate(`/search/${input}`);
   }

   return(
   <div className="border border-dark header">
       
   <FaBars className="header__menu" size={26}
   onClick={()=>handleToggleSidebar()}
   />
   <img
   src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
   alt="yt logo"
   className="header__logo"
   />


   <form onSubmit={handleSubmit}>
   <input type="text" placeholder="Search" value={input} onChange={e=>setInput(e.target.value)}></input>
       <button type="submit">   <AiOutlineSearch size={22}/>
</button>
   </form>


   <div className="header__icons">
   <MdNotifications size={28}/>
   <MdApps size={28}/>
   <img src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" alt="avatar"/>
   </div>
   </div>
   )
}
export default Header;