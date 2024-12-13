import Incomedetails from "../components/Incomedetails.jsx"
import Filter from "../components/Filter.jsx"
import Chat from "../components/Chat.jsx"
import Search from "../components/Search.jsx"
import AmountList from "../components/AmountList.jsx"
import { useLoaderData } from "react-router-dom"
import { useEffect, useMemo, useRef, useState } from "react"
import {jsPDF} from "jspdf"

export default function FiatExpenses(){

    const amountData = useLoaderData()
    const componentRef = useRef()
    const [selectedSymbol, setSelectedSymbol] = useState("")
    const [rates, setRates] = useState("")
    const [regulate, setRegulate] = useState(true)
    
    const calc = useMemo(()=>{
       if(selectedSymbol === "$"){
        const total = amountData.reduce((acc, curr)=> acc + curr.amount, 0) * rates.rates.USD
        return total
       }else if(selectedSymbol === "£"){
        const total = amountData.reduce((acc, curr)=> acc + curr.amount, 0) * rates.rates.EUR
        return total
       }else if(selectedSymbol === "₦"){
        const total = amountData.reduce((acc, curr)=> acc + curr.amount, 0) * rates.rates.NGN
        return total 
       }else{
        const total = amountData.reduce((acc, curr)=> acc + curr.amount, 0)
        return total
       }
       
    }, [selectedSymbol])

    const handleSymbolChange = (newSymbol)=>{
       setSelectedSymbol(newSymbol)
       setRegulate(false)
    }

    const downloadPdf = (e)=>{
        console.log("hello")
        const pdf = new jsPDF({
            orientation:"potrait",
            unit:"px",
            format:"a4"
        })

        const pageWidth = pdf.internal.pageSize.getWidth();

        const component = componentRef.current;
        const originalWidth = component.style.width;
        const originalMaxWidth = component.style.maxWidth;
    
        component.style.width = `${pageWidth}px`;
        component.style.maxWidth = `${pageWidth}px`;

        pdf.html(componentRef.current, {
            callback: (doc)=>{
                component.style.width = originalWidth;
                component.style.maxWidth = originalMaxWidth;

                doc.save("FiatIncome.pdf")
            },
            x:0,
            y:0,
            width: pageWidth - 20,
            autoPaging: true,
            html2canvas:{
                scale: 1,
                useCORS: true
            }
        })
    }

    useEffect(()=>{
        const currencyLoader = async ()=>{
            try{
                const response = await fetch(`https://open.er-api.com/v6/latest/USD`)
        
          if(!response.ok){
            alert("Error")
            throw new Error("Failed to Fetch Data")
          }
          const data = await response.json()
          setRates(data)
          return data
        
            }catch(error){
                throw new Response(JSON.stringify({ message: error.message }) || { status: 500 });
            }
        }
        currencyLoader()
    }, [])

    return(
        <div className="w-[100%] max-w-[100%] h-auto p-4" ref={componentRef}>
        <Filter
        filterApplied={2}
        />
        <Incomedetails
        totalName={"Total Fiat Expense"}
        amount={regulate ? `$${calc}`: `${calc}`}
        onSymbolChange={handleSymbolChange}
        />
    
        {amountData.map((item, index)=>(
            <div key={index}>
                <AmountList 
                amount={`$${item.amount}`}
                date={item.date}
                />
            </div>
        ))}

        <Chat
            downloadPdf={downloadPdf}
        />
        <Search/>
    </div>
    )
}

export const fiatLoader = async ()=>{


    try{
     const response = await fetch("http://localhost:5000/income")
 
     if(!response.ok){
         alert("error")
         throw new Error("Failed to Fetch data")
         
     }
     const data = response.json()
     
     return data
    } catch(error){
     throw json({message: error.message}, {status:500});
    }
 
  
 }