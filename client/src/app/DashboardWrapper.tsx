"use client"


import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from './redux';



const DashboardLayout = ({children}:{children:React.ReactNode}) => {

 
    const isSidebarCollapsed = useAppSelector((state: any) => state.global.isSidebarCollapsed);


  



  return (
    <div className='flex min-h-screen bg-gray-50 text-gray-900'>
        <Sidebar />
        <main className={`flex w-full flex-col  bg-gray-50 md:pl-64 ${isSidebarCollapsed ? "" : "md:pl-64 "}` }>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <StoreProvider>  
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper