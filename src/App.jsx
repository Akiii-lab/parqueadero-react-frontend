import {Routes, Route } from "react-router-dom";
import Singup from "./pages/Singup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

function App() {
    return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App;
