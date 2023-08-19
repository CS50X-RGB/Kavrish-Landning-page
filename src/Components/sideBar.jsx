import logo from '../assets/Logo.svg';
import icon from '../assets/icon3.svg';
import icon1 from '../assets/icon4.svg';
import icon2 from '../assets/icon5.svg';
import icon3 from '../assets/icon6.svg';
import icon4 from '../assets/icon7.svg';
import manager2 from '../assets/manager2.svg';
// import logo from '../assets/activeLogo.svg';
import {BsMenuButtonWideFill,BsFillPeopleFill} from 'react-icons/bs';
import {PiTelevisionSimpleFill} from 'react-icons/pi';

function SideBar(){
    // const [active ,setActive] = useState();
    return (
        <>
        <div className="z-10 md:z-0 fixed bottom-0 right-0 left-0 md:static flex flex-row md:flex-col h-100 md:min-h-screen p-5 bg-[#181818] shadow-xl shadow-black items-center justify-around gap-4 md:gap-16 rounded-xl">
        <img src={logo} alt='logo' className='hidden md:block w-16'/>
        <div className='flex flex-row  md:flex-col gap-[2rem] md:gap-[5rem]'>
        <BsMenuButtonWideFill className='fill-white focus:fill-green-300  md:w-10 md:h-10'/>
        <BsFillPeopleFill className='fill-white w-10 md:h-10' />
        <PiTelevisionSimpleFill className='fill-white w-4 h-4 md:w-10 md:h-10'/>
        <img  src={icon} alt='icon' className='w-4 h-4 md:w-10 md:h-10'/>
        <img  src={icon1} alt='icon1' className='w-4 h-4 md:w-10 md:h-10' />
        <img  src={icon2} alt='icon2' className='w-4 h-4 md:w-10 md:h-10' />
        <img  src={icon3} alt='icon3' className='w-4 h-4 md:w-10 md:h-10' />
        <img  src={icon4} alt='icon3' className='w-4 h-4 md:w-10 md:h-10' />
        </div>
        <img src={manager2} alt='user' className='hidden md:block h-1/4 w-/4' />
        </div>
        </>
    )
}
export default SideBar;