"use client";

import React, { use } from "react";
import { useState } from "react";
import Image from "next/image";
import { Link, LockIcon,Home } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 
  overflow-y-auto bg-white w-64 `;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
          <div className="text-xl font-bold text-gray-800">LIST</div>
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <div>
          <h3 className=" text-md font-bold tracking-widest"> Ashu's Team</h3>
          <div className = "mt-1 flex items-start gap-2">
            <LockIcon className = "w-4 h-4 text-gray-500" />
            <p className="text-xs text-gray-500">Private</p>
          </div>
          </div>
        </div>
          <nav className="z-10 w-full">
            <SidebarLink
             icon = {Home}
             label = "Home"
             href = "/"
            />
          </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps{
  href : string;
  icon : LucideIcon;
  label : string;
  // isCollapsed : boolean
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  // isCollapsed
}: SidebarLinkProps) =>{
  const pathname = usePathname();
  const isActive  = pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;


   const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state: any) => state.global.isSidebarCollapsed);

  return (
    <Link href = {href} className = "w-full">
      <div className={`relative flex cursor-pointer items-center gap-3 transition-colors 
      hover:bg-gray-100 ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-600"}`}>

        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500"/>
        )}

        <Icon className="h-6 w-6 text-gray-800 "></Icon>
        <span className={`font-medium text-gray-100 `}>
          {}
        </span>

      </div>

    </Link>

  )
}



export default Sidebar;
