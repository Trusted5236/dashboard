import { useNavigate, useLocation } from "react-router-dom"
export default function Expenses(){
    const navigate = useNavigate()
    const location = useLocation()
    return(
        <div>
            <div className={`flex flex-row justify-between items-start bg-slate-50 p-[1rem] rounded-[0.8rem] w-full`}>
                <button onClick={()=>navigate("fiat")} className={`py-[0.5rem] px-[2rem] rounded-[0.5rem] transition duration-500 ease-in-out active:bg-slate-300 ${location.pathname.includes("fiat") ? "bg-slate-300" : "hover:bg-slate-400"}`}>Fiat Income</button>

                <button onClick={()=>navigate("crypto")} className={`py-[0.5rem] px-[2rem] rounded-[0.5rem] transition duration-500 ease-in-out active:bg-slate-300 ${location.pathname.includes("crypto") ? "bg-slate-300" : "hover:bg-slate-400"}`}>Crypto Income</button>

                <button onClick={()=>navigate("total")} className={`py-[0.5rem] px-[2rem] rounded-[0.5rem] transition duration-500 ease-in-out active:bg-slate-300 ${location.pathname.includes("total") ? "bg-slate-300" : "hover:bg-slate-400"}`}>Total Income</button>
            </div>
        </div>
    )
}