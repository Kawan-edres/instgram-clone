import {useState} from "react";
import InboxItems from "../Components/InboxItems"
import {ReactComponent as Innbox} from "../Assets/icons/inbox.svg"
import {ReactComponent as Arrow} from "../Assets/icons/arrowdown.svg"
import images from "../Components/Images";
import New from "../Components/New";
import {useNavigate} from "react-router-dom"






const Inbox = () => {
  const[isOpen,setIsOpen]=useState(false);
  const forward=useNavigate();

  const overLay =()=>{

    setIsOpen(!isOpen);

  }
  return (
    <>
     {isOpen?
     forward("/new")
              :
      
    <div className=" mt-5 h-[88vh] w-[1000px] flex border-mGray border overflow-hidden rounded-[5px] av:w-[100%]    ">
      {/* right  */}
      <div className="w-[22rem] h-[88vh] flex flex-col border-r border-mGray  relative cursor-pointer ">
        <div className="text-center border-b border-mGray h-36 flex justify-center items-center">
          <h1>kawan_idrees</h1>
          <div className=" ml-3 rotate-180"><Arrow  /></div>
            <div className="absolute right-4">
           
            <button onClick={overLay}> <Innbox /></button>
            
            </div>
          
        </div>

        <div className="flex-col ">
       
        <InboxItems img={images[0]} name="kawan idrees" />
        <InboxItems img={images[1]} name="milad karim"/>
        <InboxItems img={images[2]} name="hana "/>
        <InboxItems img={images[3]} name="aram"/>
        <InboxItems img={images[4]} name="yusf"/>
        <InboxItems img={images[5]} name="نالی شهید مسلح ملا قەرە"/>
        <InboxItems img={images[6]} name="hewr"/> 
        <InboxItems img={images[7]} name="ahamd mhamad"/>
        <InboxItems img={images[0]} name="kawan idrres"/>
        <InboxItems img={images[1]} name="milad karim"/> 
        <InboxItems img={images[2]} name="hana"/>
        <InboxItems img={images[3]} name="aram"/>
        <InboxItems img={images[4]} name="yusf"/> 
        <InboxItems img={images[5]} name="naly"/> 
        <InboxItems img={images[6]} name="hewr"/>
        <InboxItems img={images[7]} name="ahamd mhamad"/>
        <InboxItems img={images[0]} name="mahmmood"/> 
        <InboxItems img={images[1]} name="salim"/>
        <InboxItems img={images[2]} name="karzan"/>
        <InboxItems img={images[3]} name="kawan"/>
        </div>

      </div>

      {/* left */}
      <div className="w-[63%] h-[100vh] text-center  mt-10">

      <div className="flex justify-center items-center h-[75vh] w-full flex-col font-thin ">
      <span ><img className="h-[100px] mb-5  " src={images[7]} alt="" /></span>
      <h1 className="text-xl mb-3  ">Your Messages </h1>
      <h6 className="text-gray1 font-normal  mb-4">Send private photos and messages to a friend or group.</h6>
      <button className="bg-buttonBlue rounded-[5px] px-3 py-1 text-white font-bold">Send Message</button>

      </div>

      
      </div>
    </div>
     }

    </>
  );
};

export default Inbox;
