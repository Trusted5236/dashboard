export default function Filter({filterApplied}){

    return(
        <div>
                       
            <div className="w-full h-auto flex flex-row justify-end p-2">
             <p className="p-2 shadow-md rounded-[0.5rem]">Filter Applied : {filterApplied}</p>
            </div>
        </div>
    )
}