import { Outlet } from "react-router-dom"
import Invest from "../Pages/Invext.jsx"
export default function InvestLayout(){

    return(
        <div>
            <Invest/>
            <Outlet/>
        </div>
    )
}