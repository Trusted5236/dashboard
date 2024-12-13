import { Outlet } from "react-router-dom"
import Expenses from "../Pages/Expenses.jsx"

export default function Expenselayout(){

    return(
        <div>
            <Expenses/>
            <Outlet/>
        </div>
    )
}