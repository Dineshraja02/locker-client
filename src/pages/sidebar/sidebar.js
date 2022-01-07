import React from 'react';
import "./sidebar.css";
import { SidebarData } from './sidebarData';
import {Icon} from "@iconify/react";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
             <div className='sidebarLogodiv' >
                 <Icon icon="akar-icons:lock-on" className='sidebarLogo' />
                 <h1 className='sidebarLogotext'>Smart Locker</h1></div>
             {SidebarData.map((val,key)=>{
                 return<li key={key} 
                        className='row'
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname= val.link}}>
                     <div id="icon">{val.icon}</div>
                     <div id="title">{val.title}</div>
                     </li>
             })}
            </ul>
        </div>
    )
}

export default Sidebar
