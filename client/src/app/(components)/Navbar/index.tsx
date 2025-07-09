import React from 'react'
import { SearchIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch } from '@/app/redux'
import { useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Menu } from 'lucide-react'




const Navbar = () => {

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state: any) => state.global.isSidebarCollapsed);


  return (
    <div className='flex items-center justify-between bg-white px-4 py-3'>
     <div className='flex items-center gap-8'>
      {!isSidebarCollapsed ? null : (
        <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
          <Menu className = " h-8 w-8"></Menu>
        </button>
      )}
      <div className ="relative flex h-min w-[200px]">
        <SearchIcon className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer'/>
        <input
        className='w-full rounded-md border border-gray-300 bg-white px-10 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none'
         type="text" 
         placeholder='Search...'
         />
      </div>
     </div>
     <div className='flex items-center'>
      <Link href='/settings' className='flex items-center gap-2'>
        <SettingsIcon className='h-5 w-5 cursor-pointer ' />
      </Link> 
      <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'>

      </div>
       
     </div>
    </div>
  )
}

export default Navbar