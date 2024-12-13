import { useLoaderData } from "react-router-dom"
import Filter from "../components/Filter.jsx"
import CryptoDetails from "../components/CryptoDetails.jsx"
import AmountList from "../components/AmountList.jsx"
import { useMemo } from "react"
import Chat from "../components/Chat.jsx"
import Search from "../components/Search.jsx"

export default function Crypto(){
    const cryptoData = useLoaderData()

    const calc = useMemo(()=>{
        const total = cryptoData.reduce((acc, cur)=> acc + cur.amount, 0)
        return total
    }, [])


    


    return(
        <div className="w-[100%] max-w-[100%] h-auto p-4">
           <div>
            <Filter
            filterApplied={3}
            />

            <CryptoDetails
            totalName={"Total Crypto Income"}
            amount={calc}
            />

            {cryptoData.map((item, index)=>(
                <div key={index}>
                    <AmountList
                    amount={item.amount}
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

export const cryptoLoader = async ()=>{
    try{
        const response = await fetch("http://localhost:5002/crypto")

        if(!response.ok){
            alert("Error")
            throw new Error("Failed to fetch data")
        }
        const data = response.json()
        return data
    }catch(error){
        throw json({message: error.message}, {status:500});
    }
}