import {useLocation} from "react-router-dom";
import logo from "../assets/Logos.svg";

const MyFridgePage = () => {
  const location = useLocation();
  const {submittedUrl} = location.state || {};

  return (
    <>
      <div className="mx-auto bg-white border border-black w-a4">
        {submittedUrl ? (
          <div className="flex-col flex">
            <div className="flex flex-row justify-between border border-b-black">
              {/* First grid with 30 images */}
              <div className="grid grid-cols-5 gap-2 p-2 border-r-2 border-black">
                {Array.from({length: 30}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>

              {/* Second grid with 30 images */}
              <div className="grid grid-cols-5 gap-2 p-2">
                {Array.from({length: 30}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Second row */}
            <div className="flex flex-row justify-between border border-b-black">
              {/* First grid with 25 images */}
              <div className="grid grid-cols-5 gap-2 p-2 border-r-2 border-black">
                {Array.from({length: 25}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>

              {/* Second grid with 25 images */}
              <div className="grid grid-cols-5 gap-2 p-2">
                {Array.from({length: 25}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Third row */}
            <div className="flex flex-row justify-between border border-b-black">
              {/* First grid with 25 images */}
              <div className="grid grid-cols-5 gap-2 p-2 border-r-2 border-black">
                {Array.from({length: 10}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>

              {/* Second grid with 10 images */}
              <div className="grid grid-cols-5 gap-2 p-2">
                {Array.from({length: 10}).map((_, index) => (
                  <div key={index} className="relative">
                    <img src={submittedUrl} alt="" className="w-20 h-20" />
                    <img src={logo} alt="" className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ))}
              </div>
            </div>


            {/* Fourth row */}
            <div className="flex flex-row justify-between border border-b-black  gap-2">
              {/* First grid with 25 images */}
              <div className="grid grid-cols-5  px-2  ">
                {Array.from({length: 25}).map((_, index) => (
                  <div key={index} className="relative">
                 <div className="w-[75px] h-[75px] border border-black flex items-center justify-center">
                  <h2 className="font-bold text-center text-xl">R{index + 1}</h2>
                 </div>
                  </div>
                ))}
              </div>

              <div>
                
              </div>

              {/* Second grid with 10 images */}
              <div className="grid grid-cols-5  px-2 ">
                {Array.from({length: 25}).map((_, index) => (
                  <div key={index} className="relative">
                 <div className="w-[75px] h-[75px] border border-black flex items-center justify-center">
                  <h2 className="font-bold text-center text-xl">R{index + 26}</h2>
                 </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>No URL submitted.</p>
        )}
      </div>
    </>
  );
};

export default MyFridgePage;
