import { useLoaderData } from "react-router-dom"
import Filter from "../components/Filter.jsx"
import Incomedetails from "../components/Incomedetails.jsx"
import AmountList from "../components/AmountList.jsx"
import { useMemo } from "react"
import Chat from "../components/Chat.jsx"
import Search from "../components/Search.jsx"


export default function Totalexpenses(){
    const totalData = useLoaderData()

    const calc =  useMemo(()=>{
        const total = totalData.reduce((acc, cur)=> acc + cur.amount, 0)
        return total
    }, [])

    return(
        <div className="w-[100%] max-w-[100%] h-auto p-4">
            <div>
            <Filter
            filterApplied={4}
            />

            <Incomedetails
            totalName={"Total Income"}
            amount={calc}
            />

            {totalData.map((item, index)=>(
                <div key={index}>
                    <AmountList
                    amount={`$${item.amount}`}
                    date={item.date}
                    />
                </div>
            ))}

            <Chat/>
            <Search/>

            </div>
        </div>
    )
}

export const totalLoader = async ()=>{
    try{
        const response = await fetch("http://localhost:5003/income")

        if(!response.ok){
            alert("Error")
            throw new Error("Failed to fetch data")
        }
        const data =  response.json()
        return data
    }catch(error){
        throw json({message: error.message}, {status:500})
    }

}