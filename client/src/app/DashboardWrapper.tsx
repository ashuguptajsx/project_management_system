import React from 'react'
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";



const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen bg-gray-50 text-gray-900'>
        <Sidebar />
        <main className="flex w-full flex-col  bg-gray-50 md:pl-64">
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper