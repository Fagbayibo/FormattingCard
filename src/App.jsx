import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import MyFridgePage from "./Pages/MyFridgePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/my-fridge" element={<MyFridgePage/>} />
    </Routes>
  );
};

export default App;
