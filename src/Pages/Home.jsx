import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyFridgePage from "./MyFridgePage";

const Home = () => {
  const [urlData, setUrlData] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [visibleInput, setVisibleInput] = useState(null);
  const navigate = useNavigate()

  const handleUrlChange = (e) => {
    setUrlData(e.target.value);
  };

  const handleLabelClick = (label) => {
    setVisibleInput(visibleInput === label ? null : label);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(urlData);
    navigate('/my-fridge', { state: { submittedUrl: urlData } });
    console.log("Submitted URL: ", urlData);
  };
  

  return (
    <div className="min-h-screen max-w-full bg-gray-100">
      <div className="w-full flex items-center justify-center h-screen flex-col gap-4">
        <h1 className="font-mono text-3xl font-bold tracking-tight">Welcome to Dowellux Formatter</h1>
        <form className="flex flex-col gap-3 w-96" onSubmit={handleUrlSubmit}>
          <div className="flex flex-col gap-1 w-full">
            <label onClick={() => handleLabelClick("fridge")} className="text-[18px] tracking-tight cursor-pointer">
              Format LLX
            </label>
            {visibleInput === "fridge" && <input onChange={handleUrlChange} type="text" className="border border-gray-300 rounded-md p-2" placeholder="Paste your QR code URL for Format LLX" />}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label onClick={() => handleLabelClick("standQR")} className="text-[18px] tracking-tight cursor-pointer">
              Format stand qrcode
            </label>
            {visibleInput === "standQR" && <input onChange={handleUrlChange} type="text" className="border border-gray-300 rounded-md p-2" placeholder="Paste your QR code URL for Format stand qrcode" />}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label onClick={() => handleLabelClick("label3")} className="text-[18px] tracking-tight cursor-pointer">
              Format all qrcode
            </label>
            {visibleInput === "label3" && <input onChange={handleUrlChange} type="text" className="border border-gray-300 rounded-md p-2" placeholder="Paste your QR code URL for Format XYZ" />}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label onClick={() => handleLabelClick("label4")} className="text-[18px] tracking-tight cursor-pointer">
              Format fridge qrcode
            </label>
            {visibleInput === "label4" && <input onChange={handleUrlChange} type="text" className="border border-gray-300 rounded-md p-2" placeholder="Paste your QR code URL for Format fridge qrcode" />}
          </div>
          <button className="px-6 py-2 rounded-lg bg-green-700 text-white tracking-tight text-md">Submit URL</button>
        </form>
      </div>
      <MyFridgePage urlInput={submittedUrl} />
    </div>
  );
};

export default Home;
