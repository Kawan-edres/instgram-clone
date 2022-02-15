import React from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BImg } from "../Assets/icons/posts.svg";

const Posts = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return ReactDom.createPortal(
    <>
    {/* over lay  */}
      <div
        onClick={back}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[20] overflow-hidden"
      >

      </div>

      {/* Conatinaer */}

      


      <div className=" fixed left-[30%]  top-[10%]  w-[40%] h-[80%] bg-white rounded-xl z-30 overflow-hidden xlarge:w-[50vw] xlarge:left-[25%] large:!w-[60vw] large:!h-[70vh] large:!left-[20%] short:!w-[85%] short:!left-[18%] short:!top-[20%] short:h-[65vh]     ">
        <div className=" font-semibold flex justify-center items-center border-b border-slate-300 h-12 ">
          <h1>Create Post</h1>
        </div>

        <div className="flex justify-center items-center flex-col w-full h-full text-center ">
          <div className="mb-3">
            <BImg />
          </div>

          <div>
            <h1 className="text-xl mb-4">Drag photos and videos here</h1>
            <button className=" bg-buttonBlue text-white p-1 px-5 rounded-sm">
              Select From Device{" "}
            </button>
          </div>
        </div>
      </div>

     

     
    </>,
    document.getElementById("portal")
  );
};

export default Posts;
