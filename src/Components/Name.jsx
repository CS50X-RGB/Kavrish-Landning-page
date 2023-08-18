import icon8 from '../assets/icon9.svg';
import icon9 from '../assets/icon10.svg';

export default function Name(){
    return(
        <>
        <div className="flex flex-col gap-4">
        <div className="shadow-xl flex flex-row  justify-between p-8 shadow-black rounded-xl bg-[#262626]">
            <div className="flex flex-col gap-9 font-bold text-white font-Popins">
                <div className="pr-4">
                <h1 className="text-3xl md:text-5xl">Hi! John</h1>
                <p className="text-md md:text-xl">How're you doin'?</p>
                </div>
                <div>
                    <p className="text-md">We have new </p>
                    <p className="text-md">Workshops for you</p>
                </div>
            </div>
        
            <div className="relative drop-shadow-2xl brightness-100 top-[2rem] left-[2rem]">
            <div className="bg-gradient-to-br from-green-300 via-green-500 to-blue-300 shadow-top-left shadow-2xl bg-blend-darken mix-blend-normal brightness-110 blur w-[10rem] h-[10rem]  rounded-tl-full rounded-r-lg"></div>  
          </div>
        </div>
        <div className="shadow-xl flex flex-row shadow-black rounded-xl bg-[#262626]">
            <div className="flex flex-row">
                <div className="flex flex-col gap-3 p-4">
                        <div className="flex flex-row flex-wrap p-2 gap-5">
                            <img src={icon8} alt='icon8'/>
                            <h1 className='font-Popins flex flex-col text-white text-lg font-bold'>
                                Members Joined
                                <p className='text-sm'>You have new friends in community, See who is there?</p>
                            </h1>
                            
                    </div>
                    <div className="flex flex-row flex-wrap p-2 gap-5">
                        <img src={icon9} alt='icon8'/>
                        <h1 className='font-Popins flex flex-col text-white text-lg font-bold'>
                        Explore Our Community
                            <p className='text-sm'>Explore the community of 10k Members</p>
                        </h1>
                    </div>
                </div>
                </div>
                <div className="relative drop-shadow-2xl brightness-100 left-[0rem] md:left-[1rem]">
                <div className="bg-gradient-to-t from-green-300 via-green-500 to-blue-300  shadow-2xl bg-blend-darken mix-blend-normal drop-shadow-2xl brightness-110 blur w-[10rem] h-[10rem] shadow-bottom-right rounded-bl-full rounded-t-xl"></div>  
         </div>
            </div>
        </div>
        </>
    )
}