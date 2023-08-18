import workshop from "../assets/workshopicn.svg";
import note from "../assets/note.svg";
import debates from "../assets/debates.svg";
import manager1 from "../assets/manager1.svg";
import manager2 from "../assets/manager2.svg";

function Rescouces1(props) {
  return (
    <div className="rounded-xl bg-[#262626]">
      <div className="rounded-xl bg-[#2B2B2B] p-5 gap-4 flex flex-row">
        <img src={props.img} alt="img1" />
        <div className="flex flex-col">
          <h1 className="text-white text-xl">{props.text}</h1>
          <p className="text-white text-md">{props.para}</p>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="flex flex-col bg-[#2B2B2B] rounded-xl text-lg font-bold w-1/3 py-3 font-Popins text-white justify-center items-center">
      <img src={props.img} alt="manager" className="" />
      <div className="flex flex-col p-5 gap-1">
      <h1>Name : {props.name}</h1>
      <p className="text-md">Category :    {props.category}</p>
      <p className="text-sm">Specialization : {props.special}</p>
      </div>
      <button className="text-black w-full py-2 mx-2 px-4 bg-[#66E550] rounded-lg">
        Send Message
      </button>
    </div>
  );
}

export default function Rescouces() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-normal md:items-center justify-center bg-[#181818] rounded-xl p-4 gap-3 font-Popins">
        <div className="flex flex-col gap-4 w-[100%] md:w-[40%] ">
          <h1 className="text-4xl font-bold text-white flex justify-start">
            Resources
          </h1>
          <div className="flex flex-col bg-[#262626] gap-4 items-center rounded-xl p-3">
          <Rescouces1
            img={workshop}
            text="Workshops"
            para="Learn about all the latest technologies that are ruling the world today"
          />
          <Rescouces1
            img={note}
            text="Roadmaps"
            className="w-full"
            para="Get a best roadmaps for your career"
          />
          <Rescouces1
            img={debates}
            text="Debates"
            para="Listen the debates of the top members of our community over the latest techs"
          />
        </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white flex justify-start">
            Managers
          </h1>
          <div className="flex bg-[#262626] justify-around p-4 rounded-xl flex-row m-4 gap-4 ">
          <Card 
          img={manager1}
          name="Rohan"
          category="Marketing"
          special="Social Media Marketing"/>
            <Card 
            img={manager2}
            name="Riya"
            category="Design"
            special="Brand Designing"/>
           
           
           
           
           
            </div>
        </div>
      </div>
    </>
  );
}
