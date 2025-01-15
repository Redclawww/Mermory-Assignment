import "./App.css";
import ScrollAnimation from "./components/scrollAnimation";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import { ReactNode, Suspense } from "react";
import Code from "./screens/Code";

function App() {
  return (
    <Router>
      <main className="relative w-full h-full font-normal">
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/code" element={<Code />} />
            </Routes>
          </Layout>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <img src={"./ellipse.svg"} alt="Background decoration" className="w-fit fixed left-0" />
      <img
        src={"./mermory.svg"}
        alt="Mermory illustration"
        className="fixed top-[20px] lg:top-[57px] left-[100px]"
      />
      <ScrollAnimation />
      {children}
    </>
  );
}