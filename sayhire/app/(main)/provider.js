import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
<<<<<<< HEAD
=======
import WelcomeContainer from './dashboard/_components/WelcomeContainer'
>>>>>>> 5bf1f5b (second)

function DashboardProvider({children}) {
  return (
    <SidebarProvider>
        <AppSidebar/>
<<<<<<< HEAD
        <div>
            <SidebarTrigger/>
=======
        <div className='w-full p-10'>
            {/* <SidebarTrigger/> */}
            <WelcomeContainer/>
>>>>>>> 5bf1f5b (second)
              {children}
        </div>
    </SidebarProvider>
  )
}

export default DashboardProvider