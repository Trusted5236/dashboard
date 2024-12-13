export default function AmountList({amount, date}){

    return(
        <div>
             <div className="flex flex-row items-center justify-between my-2 p-4 rounded-[0.5rem] bg-slate-50 border-l-2 border-green-600">
                <div className="">
                    <h2 className="font-bold text-[0.9rem]">{amount}</h2>
                    <p className="text-slate-500 text-[0.5rem]">{date}</p>
                </div>

                <div>
                    <p className="text-slate-500 text-[0.5rem]">See Details</p>
                </div>
             </div>
        </div>
    )
}