import Settings from "../Pages/Settings"
import { Outlet } from "react-router-dom"
export default function SettingLayout(){
    return(
        <div className="w-full h-auto flex flex-row ">
            <Settings/>
            <Outlet/>
        </div>
    )
}