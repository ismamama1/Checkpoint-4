import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "@pages/Home";
import List from "@pages/List";
import Register from "@pages/Register";
import Login from "@pages/Login";
import ListItem from "@pages/ListItem";
import Navbar from "@components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:contribution-id" element={<ListItem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
