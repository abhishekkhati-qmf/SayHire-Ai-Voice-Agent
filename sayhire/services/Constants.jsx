<<<<<<< HEAD
import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";
=======
import { Brain, BriefcaseBusiness, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, Settings, User2Icon, WalletCards } from "lucide-react";
>>>>>>> 5bf1f5b (second)

export const SideBarOptions=[
   {
     name:'Dashboard',
     icon:LayoutDashboard, 
     path:'/dashboard'
   },
    {
     name:'Scheduled Interview',
     icon:Calendar, 
     path:'/scheduled-interview'
   },
    {
     name:'All Interview',
     icon:List, 
     path:'/all-interview'
   },
    {
     name:'Billing',
     icon:WalletCards, 
     path:'/billing'
   },
    {
     name:'Settings',
     icon:Settings, 
     path:'/settings'
   },

<<<<<<< HEAD
=======
]

export const InterviewType = [
  {
    title: 'Technical',
    icon: Code2Icon
  },
  {
    title: 'Behavioral',
    icon: User2Icon
  },
  {
    title: 'Experience',
    icon: BriefcaseBusiness
  },
  {
    title: 'Problem Solving',
    icon: Puzzle
  },
  {
    title: 'Leadership',
    icon:   Brain
  },
>>>>>>> 5bf1f5b (second)
]