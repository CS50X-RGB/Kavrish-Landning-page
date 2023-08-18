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
        <div className="flex flex-col min-h-screen p-5 bg-[#181818] shadow-xl shadow-black items-center justify-around gap-16 rounded-xl">
        <img src={logo} alt='logo' className='w-16'/>
        <div className='flex flex-col gap-[5rem]'>
        <BsMenuButtonWideFill className='fill-white focus:fill-green-300' size={45}/>
        <BsFillPeopleFill className='fill-white' size={45} />
        <PiTelevisionSimpleFill className='fill-white' size={45} />
        <img  src={icon} alt='icon' />
        <img  src={icon1} alt='icon1' />
        <img  src={icon2} alt='icon2' />
        <img  src={icon3} alt='icon3' />
        <img  src={icon4} alt='icon3' />
        </div>
        <img src={manager2} alt='user' />
        </div>
        </>
    )
}
export default SideBar;