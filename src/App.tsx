import "./App.css";
import ScrollAnimation from "./components/scrollAnimation";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Otp from "./screens/Code";

function App() {
  return (
    <Router>
      <main className="relative font-normal ">
        <img src="./ellipse.svg" alt="" className="w-fit fixed left-[0]" />
        <img
          src="./mermory.svg"
          alt=""
          className="fixed top-[20px] lg:top-[57px] left-[100px]  z-10"
        />
        <ScrollAnimation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/code" element={<Otp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
