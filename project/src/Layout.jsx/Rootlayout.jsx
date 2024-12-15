import { Outlet } from "react-router-dom"
import SideBar from "../components/Sidebar.jsx"
export default function RootLayout(){

    return(
        <div className="flex h-[100%] w-[100%] p-[1rem] justify-start items-start gap-x-[2rem]">

            <div className="w-[24%] h-[100vh] sticky left-0 top-0">
                <SideBar/>
            </div>

            <div className="w-[76%] h-[100%]">
                <Outlet/>
            </div>
        </div>
    )
}