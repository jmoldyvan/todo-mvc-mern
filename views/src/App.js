import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import Welcome from "./components/Welcome";
import Register from "./components/Register";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>register</Link>
        </div>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
