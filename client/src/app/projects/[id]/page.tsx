"use client"


import React from 'react'
import { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";

type Props = {
    params : {id: string}
}

const Pproject = ({params}: Props) => {
    const{id} = params;
    const[activeTab, setActiveTab] = useState("Board");
    const[isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);


  return (
    <div>
        <ProjectHeader activeTab = {activeTab} setActiveTab = {setActiveTab}/>
        
    </div>
  )
}

export default Pproject