import { CiFileOn } from "react-icons/ci";
export default function Chat({downloadPdf}){

    return(
        <div>
            
            <div onClick={downloadPdf} className="flex flex-row justify-end p-2">
                <button className="flex items-center flex-row border-slate-600 border-[0.1rem] bg-slate-50 p-1 text-[0.5rem] rounded-[0.2rem] shadow-md cursor-pointer">Download Report <CiFileOn/></button>
            </div>
            
        </div>
    )
}