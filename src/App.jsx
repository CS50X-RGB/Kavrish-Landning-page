import GrowthAndCalendar from "./Components/GrowthandCalendar";
import Name from "./Components/Name";
import Rescouces from "./Components/Resources";
import Workshops from "./Components/Worshops";
import SideBar from "./Components/sideBar";
import logo from './assets/Logo.svg'
import manager2 from './assets/manager2.svg';

function App(){

     return(
    <>

    <div className="p-3 w-full h-full bg-black flex flex-col-reverse md:flex-row gap-5">
    <SideBar/>    
    
    <div className="flex flex-col">
      <div className="flex flex-row justify-between py-6 md:hidden ">
       <img src={logo}  className="w-1/16 h-1/16"/>
       <img src={manager2} alt='user' className='h-30 w-30' />
       </div>
      <div className="flex flex-col md:flex-row justify-around bg-[#181818] rounded-xl p-[0.3rem] md:p-[2rem] gap-6">
        <Name/>
        <GrowthAndCalendar/>
      </div>
        <div className="flex flex-col md:flex-row justify-around gap-4 p-[1rem] rounded-xl">
        <Workshops/>
        <Rescouces/>
        </div>
        
    </div>
    </div>
    </>
  )
}
export default App;