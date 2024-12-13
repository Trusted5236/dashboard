import { useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Settings(){
        const navigate = useNavigate()
        useEffect(()=>{

        })
    return(
        <div className="w-[24%] h-[100vh] flex flex-col items-start justify-start gap-y-6 p-2 bg-slate-100 rounded-[0.8rem]">
            <button onClick={(e)=>navigate("account")} className="flex flex-row items-center font-bold pt-6 gap-x-2"><IoIosSettings /> Account Setting</button>
            
            <button onClick={(e)=>navigate("payment")} className="flex flex-row items-center font-bold pt-3 gap-x-2"><MdPayment /> Banks and Cards</button>
        </div>
    )
}