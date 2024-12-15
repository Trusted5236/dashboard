
import { useEffect, useState } from "react"
import card from "../assets/Card.jpg"
export default function Payment(){
    const [screen, setScreen] = useState(true)

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth < 768){
                setScreen(false)
            }else{
                setScreen(true)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)
    }, [])

    return(
        <div className="w-full h-auto p-2">
           <h1 className="text-[1.5rem] text-slate-400 border-b">Card details</h1>
           <div className={screen ? "flex flex-row items-center justify-between" : ""}>
                <div className="flex flex-col justify-center items-start">
                    <img src={card} alt="card" className={screen ? "w-[25rem]" : "w-[15rem]"}/>
                    <div className={screen ? "pl-8 flex flex-col gap-y-4" : "pl-5 flex flex-col gap-y-4"}>
                    <p><a href="#" className="font-bold text-blue-900 text-[0.85rem]">Confirm your credit card</a></p>
                    <p><a href="#" className="font-bold text-blue-900 text-[0.85rem]">Remove card</a></p>
                    </div>
                </div>


                <div>
                    <div className='flex flex-col gap-y-1 w-[100%] pt-2'>
                    <label htmlFor="date">Expiration date</label>
                    <input type="text" placeholder="09/2025" className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>

                    <div className='flex flex-col gap-y-1 w-[100%] pt-2'>
                    <label htmlFor="date">CVV</label>
                    <input type="text" placeholder="Required" className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>

                    <div className='flex flex-col gap-y-1 w-[100%] pt-2'>
                    <label htmlFor="date">Cardholder's name</label>
                    <input type="text" placeholder="Jane Doe"className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>

                    <div className='flex flex-col gap-y-1 w-[100%] pt-2'>
                    <label htmlFor="date">Billing address</label>
                    <input type="text" placeholder="2 North 31th Street, NA 93104" className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>
                    
                    <div className='flex flex-col gap-y-1 w-[100%] pt-2'><button className='bg-blue-900 text-white font-bold p-4 rounded-lg'>Save</button></div>


                </div>
           </div>
        </div>
    )
}