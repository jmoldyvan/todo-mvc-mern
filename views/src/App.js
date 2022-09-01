import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import Welcome from "./components/Welcome";
import Signup from "./components/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>signup</Link>
        </div>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
