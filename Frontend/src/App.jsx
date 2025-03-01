import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={< Home />} />
      </Routes>
    </div>
  );
}

export default App;