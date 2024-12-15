import icon1 from "../assets/tabler-icon-coins.svg"
import icon2 from "../assets/tabler-icon-background.svg"
import icon3 from "../assets/tabler-icon-mail.svg"
import icon4 from "../assets/tabler-icon-moneybag.svg"
import icon5 from "../assets/Vector (1).svg"
import { NavLink, useLocation } from "react-router-dom"

export default function SideBar(){

    return(
        <div className="bg-zinc-800 rounded-[0.8rem] w-[100%] h-auto py-[8rem] px-[1.5rem]">
                
            <div className="flex flex-col justify-start items-start gap-y-3">
            <NavLink to={"/"} className={({isActive})=>isActive ?"bg-slate-600 rounded-r-lg p-2 transition-all duration-500 ease-in-out" : ""}>

               <div className="flex flex-row items-start gap-x-[0.5rem] w-[100%] h-auto justify-start">

                <div className="w-fit h-auto">
                        <img src={icon1}/>
                    </div>
                    
                    <div className="w-fit h-auto flex flex-col gap-y-[0.125rem]">
                        <h1 className="text-[1rem] font-bold text-white">Income</h1>
                        <p className="text-[0.85rem] text-gray-400 h-auto flex">Click to see how much income you've made</p>
                </div>

               </div>
             </NavLink>

             <NavLink to={"expenses"} className={({isActive})=>isActive ?"bg-slate-600 rounded-r-lg p-2 transition-all duration-500 ease-in-out" : ""}>
               <div className="flex flex-row items-start gap-x-2">

                <div className="w-fit h-auto">
                        <img src={icon5}/>
                    </div>
                    
                    <div className="w-fit h-auto flex flex-col gap-y-[0.125rem]">
                        <h1 className="text-[1rem] font-bold text-white">Expenses</h1>
                        <p className="text-[0.85rem] text-gray-400">Click to see how much you've spent</p>
                </div>

               </div>
             </NavLink>


             <NavLink to={"sms"} className={({isActive})=>isActive ?"bg-slate-600 rounded-r-lg p-2 transition-all duration-500 ease-in-out" : ""}>
               <div className="flex flex-row items-start gap-x-2 ">

                <div className="w-fit h-auto">
                        <img src={icon3}/>
                    </div>
                    
                        <div className="w-fit h-auto flex flex-col gap-y-[0.125rem]">
                        <h1 className="text-[1rem] font-bold text-white">SMS alerts</h1>
                        <p className="text-[0.85rem] text-gray-400">Click to see your financial SMS notifications</p>
                </div>

               </div>
             </NavLink>


             <NavLink to={"investments"} className={({isActive})=>isActive ?"bg-slate-600 rounded-r-lg p-2 transition-all duration-500 ease-in-out" : ""}>
               <div className="flex flex-row items-start gap-x-2 ">

                <div className="w-fit h-auto">
                        <img src={icon4}/>
                    </div>
                    
                    <div className="w-fit h-auto flex flex-col gap-y-[0.125rem]">
                        <h1 className="text-[1rem] font-bold text-white">Investments</h1>
                        <p className="text-[0.85rem] text-gray-400">Click to see how much you have invested</p>
                </div>

               </div>
             </NavLink>


             <NavLink to={"settings"} className={({isActive})=>isActive ?"bg-slate-600 rounded-r-lg p-2 transition-all duration-500 ease-in-out" : ""}>
               <div className="flex flex-row items-start gap-x-2">

                <div className="w-fit h-auto">
                        <img src={icon2}/>
                    </div>
                    
                    <div className="w-fit h-auto flex flex-col gap-y-[0.125rem]">
                        <h1 className="text-[1rem] font-bold text-white">Settings</h1>
                        <p className="text-[0.85rem] text-gray-400">Click to change your Settings</p>
                </div>

               </div>
             </NavLink>
            </div>
            
        </div>
    )
}