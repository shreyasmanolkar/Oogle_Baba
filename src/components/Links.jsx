import React from "react";
import { NavLink } from "react-router-dom";

export const Links = () => {
    return(
        <div className="flex sm:justify-around justify-between items-center mt-4">
            <NavLink to="/search" className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0")} >🔎 All</NavLink>
            <NavLink to="/news" className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0")} >📰 News</NavLink>
            <NavLink to="/image" className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0")} >📸 Images</NavLink>
            <NavLink to="/videos" className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0")} >📺 Videos</NavLink>
        </div>
    )
};