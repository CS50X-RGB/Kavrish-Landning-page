import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';


/*Div uske photo ghante wale ko ek div mai flex row ko flex col */

export default function Workshops(){
    return(
        <>
        <div className="flex flex-col font-Popins rounded-xl p-[1rem]  bg-[#181818]">
            <h1 className='text-white text-3xl pb-4 font-bold flex justify-start'>Workshops</h1>
            <div className='flex flex-col gap-4'>
            <div className="flex flex-col md:flex-row gap-5   bg-[#262626] rounded-xl">
         <img src={Project1} className='rounded-xl' alt='project1'/>
           <div className="flex flex-row p-3">
                    <div className='flex flex-col px-6'>
                        <h1 className='text-2xl font-bold text-white'>Marketing Workshop</h1>
                        <p className='text-white p-1'>Guest: Roota Mittal</p>
                        <p className='text-white p-1'>Do you wanna know about digital...</p>
                        <button className='w-full py-3 px-6 shadow-md cursor-pointer rounded-xl shadow-[#66E550] bg-[#66E550] text-black'>Register</button>
                    </div>
                    <div className="w-10 h-10 relative p-2">
                        <div className="w-7 h-7 rounded-full bg-[#66E550] opacity-[0.15]"></div>
                        <svg
                        className="z-2 absolute top-[10px] left-[10px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                        d="M8.352 20.242C8.78715 20.7922 9.34165 21.2364 9.97361 21.541C10.6056 21.8455 11.2985 22.0025 12 22C12.7015
                         22.0025 13.3944 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7922 15.648 20.242C13.2271 20.5702 10.7729 
                         20.5702 8.352 20.242ZM18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 
                         17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558
                          12.078C5.01158 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z"
                        fill="#ffff"
                        />
                        </svg>
                        </div>
            
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5  bg-[#262626] rounded-xl">
            <img src={Project2} className='rounded-xl' alt='project2'/>
                <div className="flex flex-row p-3">
                <div className='flex flex-col px-6'>
                    <h1 className='text-2xl font-bold text-white'>Designing Workshop</h1>
                    <p className='text-white p-1'>Guest:Shantanu</p>
                    <p className='text-white p-1'>Do you wanna know about UI UX...</p>
                    <button className='w-full py-3 px-6 shadow-md cursor-pointer rounded-xl shadow-[#66E550] bg-[#66E550] text-black'>Register</button>
                </div>
                <div className="w-10 h-10 relative p-2">
                    <div className="w-7 h-7 rounded-full bg-[#66E550] opacity-[0.15]"></div>
                    <svg
                    className="z-2 absolute top-[10px] left-[10px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                    d="M8.352 20.242C8.78715 20.7922 9.34165 21.2364 9.97361 21.541C10.6056 21.8455 11.2985 22.0025 12 22C12.7015
                     22.0025 13.3944 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7922 15.648 20.242C13.2271 20.5702 10.7729 
                     20.5702 8.352 20.242ZM18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 
                     17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558
                      12.078C5.01158 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z"
                    fill="#ffff"
                    />
                    </svg>
                    </div>
                </div>
                </div>
             </div>
             </div>
        </>
    )
}