"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

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
          
      </div>
    </div>
  );
};

export default Sidebar;
