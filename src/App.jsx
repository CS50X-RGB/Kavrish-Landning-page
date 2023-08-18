import GrowthAndCalendar from "./Components/GrowthandCalendar";
import Name from "./Components/Name";
import Rescouces from "./Components/Resources";
import Workshops from "./Components/Worshops";
import SideBar from "./Components/sideBar";

function App(){
  return(
    <>
    <div className="p-3 w-full h-full bg-black flex flex-row gap-5">
    <SideBar/>
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-around bg-[#181818] rounded-xl p-[2rem] gap-6">
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