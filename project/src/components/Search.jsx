import { FaTelegramPlane } from "react-icons/fa";

export default function Search(){

    return(
        <div className="w-[100%]">
            <div className="w-[100%] h-auto  px-2 flex items-center flex-row border-[0.2rem] rounded-[1.5rem]">

                <input type="search" className=" w-[100%] p-2 border-none outline-none rounded-[1.5rem] text-[0.5rem]" placeholder="Talk to our AI finance expert"/>

                <FaTelegramPlane />

            </div>
        </div>
    )
}