import React, {useState} from 'react'
import Header from "@/components/Header";
import { Interface } from 'readline';

type Props = {
  activeTab: string;
  setActiveTab : (tabName: string) => void;
}

const ProjectHeader = ({activeTab, setActiveTab}: Props) => {

  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false); 
  return (
    <div className='px-4 xl:px-6'>
      <div className='pb-6 pt-6 lg:pb-4 lg:pt-8'>
         <Header name = "product design development"/>
      </div>
    </div>
  )
};

type TabButtonProps = {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
}


const TabButton = ({name, icon, setActiveTab, activeTab}: TabButtonProps) =>{
       const isActive = activeTab === name;
       return(
        <button className>

        </button>
       )
}
export default ProjectHeader