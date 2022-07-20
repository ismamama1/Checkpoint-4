import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Register";
import Page3 from "@pages/Login";
import Navbar from "@components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/register" element={<Page2 />} />
        <Route path="/login" element={<Page3 />} />
      </Routes>
    </>
  );
}

export default App;
