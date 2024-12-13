import { useLoaderData } from "react-router-dom"
import { IoIosNotifications } from "react-icons/io";

export default function SMS(){
    const smsData =  useLoaderData()

    return(
        <div className="w-[100%] max-w-[100%] h-auto p-4">
            <div className="flex items-center flex-row justify-between w-full h-auto">
                <h1 className="text-[1.2rem] font-bold ">NOTIFICATION MESSAGES</h1>

                <input 
                type="search" 
                placeholder="search notification"
                className=" border-[0.1rem] rounded-lg outline-none p-[0.3rem] text-[0.8rem]"
                />
            </div>

            <div className="flex justify-end items-end flex-row p-2">
                <select name="" id="" className="w-fit h-auto border rounded-lg text-[1rem] text-slate-400 outline-none cursor-pointer">
                    <option value="">All</option>
                    <option value="">Today</option>
                    <option value="">Last 24H</option>
                </select>
            </div>

            <div>
                {smsData.map((item, index)=>(
                    <div key={index} className="p-2 bg-slate-50 flex flex-col items-start justify-start my-4 border-l-green-600 border-l-[0.2rem]">
                        <div className="flex flex-row items-center gap-x-1">
                        <IoIosNotifications className="text-[1.2rem]"/>
                        <h2 className="font-bold text-green-600 text-[1.2rem]">{item.Messages}</h2>
                        </div>
                        <p>{item.Content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const smsLoader = async ()=>{
    try{
        const response = await fetch("http://localhost:5004/SMS")
    if(!response.ok){
        alert("Error")
        throw new Error("Cannot fetch data")
    }
    const data = response.json()
    return data
    }catch(error){
        throw json({message: error.message}, {status:500});
    }
}