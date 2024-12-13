import { useState } from "react"
import Currency from "./Currency"
export default function({totalName, amount, onSymbolChange}){

    const [symbol, setSymbol] = useState("")
    const handleChange =(e)=>{
        const newSymbol = e.target.value
        setSymbol(newSymbol)
        onSymbolChange(newSymbol)
    }

    return(
        <div>
 
            <div className="flex flex-row items-center justify-between bg-slate-50 px-3 py-4 rounded-[0.5rem]">
                <h1 className="text-[1.3rem] text-slate-600">{totalName}</h1>


                <div className="flex items-center gap-x-1">
                    <Currency
                    currency={symbol}
                    />
                    <p className="text-[1.3rem] text-green-600">{amount}</p>
                    
                    <select name="" id="" className="p-1 rounded-[0.5rem] border-none h-[1.5]" value={symbol} onChange={handleChange}>
                    <option value="$">USD</option>
                    <option value="₦">NGN</option>
                    <option value="£">EUR</option>
                    </select>

                </div>

            </div>

            <div>
                
            </div>
        </div>
    )
}