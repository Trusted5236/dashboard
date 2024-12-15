import profile from '../assets/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail-removebg-preview (1).png'
export default function Account(){
    
    return(
        <div className="w-full p-2 h-auto">
            <form action="">
                <div className='w-full h-auto flex flex-row items-center justify-between'>
                    <div className='w-full h-auto flex flex-row items-center gap-x-2'>
                        <div><img src={profile} className='rounded-[100%] w-[5rem] h-[100%]'/></div>
                        <div>
                            <h2 className='font-bold'>Profile picture</h2>
                            <p className='text-[0.7rem] text-slate-400'>PNG, JPEG under 15MB</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center gap-x-2'>
                    <button className='bg-slate-200 rounded-lg py-[0.3rem] px-[1rem] text-[1rem]'>Upload</button>
                    <button className='bg-slate-200 rounded-lg py-[0.3rem] px-[1rem] text-[1rem]'>Delete</button>
                    </div>
                </div>

               <div>
                  <div className='flex flex-row items-center justify-between pt-6 gap-x-3'>

                  <div className='flex flex-col gap-y-2 w-[50%]'>
                        <label htmlFor="firt">First Name</label>
                        <input 
                        type="text" 
                        placeholder="John"
                        className='outline-none border-[0.1rem] rounded-lg p-2'
                        />
                    </div>

                    <div className='flex flex-col gap-y-2 w-[50%]'>
                    <label htmlFor="firt">Last Name</label>
                    <input type="text" placeholder="Doe" className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>
                  </div>

                    <div className='flex flex-col gap-y-2 w-[50%] pt-6'>
                    <label htmlFor="firt">Email</label>
                    <input type="text" placeholder="johondoe@gmail.com" className='outline-none border-[0.1rem] rounded-lg p-2'/>
                    </div>

                    <div className='flex flex-col gap-y-2 w-[50%] pt-6'>
                        <label htmlFor="bio">Write a short bio</label>
                        <textarea name="" id="" placeholder="I love Chelsea💙💙" className='outline-none border-[0.1rem] rounded-lg p-2'></textarea>
                    </div>
               </div>

                <div className='flex flex-col gap-y-2 w-[50%] pt-6 '>
                    <button className='bg-black text-white font-bold p-4 rounded-lg'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}