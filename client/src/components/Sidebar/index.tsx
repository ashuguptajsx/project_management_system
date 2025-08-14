"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LockIcon,
  Home,
  X,
  Briefcase,
  Search,
  Settings,
  User,
  Users,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  AlertTriangle,
  AlertOctagon,
  Layers3,
  AlertCircle,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import Link from "next/link";
import { useGetProjectsQuery } from "@/state/api";


const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const {data: projects} = useGetProjectsQuery();
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state: any) => state.global.isSidebarCollapsed
  );

  const sidebarClassNames = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 z-40 
    overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0" : "w-64"}`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-full w-full flex-col justify-start">
        {/* Header */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-4 py-3">
          <div className="text-xl font-bold text-gray-800">LIST</div>
          {!isSidebarCollapsed && (
            <button
              className="p-1 rounded-md hover:bg-gray-100"
              onClick={() => dispatch(setIsSidebarCollapsed(true))}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500" />
            </button>
          )}
        </div>
  
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <div>
            <h3 className="text-md font-bold tracking-widest">Ashu's Team</h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="w-4 h-4 text-gray-500" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />

          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>
        <button
          onClick={() => {
            setShowProjects((prev) => !prev);
          }}
          className=" flex w-full items-center justify-between px-8 py-3 text-gray-500 cursor-pointer"
        >
          <span className="">Projects </span>
          {showProjects ? (
            <ChevronUp className=" h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className=" h-4 w-4 text-gray-500" />
          )}
        </button>

        {showProjects && projects?.map((project) =>(
           <SidebarLink key = {project.id}
           icon = {Briefcase}
           label = {project.name}
           href = {`/projects/${project.id}`}/>
        ))}

        <button
          onClick={() => {
            setShowPriority((prev) => !prev);
          }}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500 cursor-pointer"
        >
          <span className="">Priorities</span>
          {showPriority ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        {showPriority && (
          <>
          <SidebarLink icon = {AlertCircle} label = "Urgent" href = "/priority/urgent"/>
          <SidebarLink icon = {ShieldAlert} label = "High" href = "/priority/high"/>
          <SidebarLink icon = {AlertTriangle} label = "Medium" href = "/priority/medium"/>
          <SidebarLink icon = {AlertOctagon} label = "Low" href = "/priority/low"/>
          <SidebarLink icon = {Layers3} label = "Backlog" href = "/priority/backlog"/>
          </>
        )}
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 px-8 py-3 transition-colors 
        hover:bg-gray-100 ${
          isActive ? "bg-gray-100 text-gray-900" : "text-gray-600"
        }`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500" />
        )}
        <Icon className="h-6 w-6 text-gray-800" />
        <span className="font-medium text-gray-800">{label}</span>
      </div>
    </Link>
  );
};

export default Sidebar;
