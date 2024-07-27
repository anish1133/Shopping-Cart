import React from "react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (<div>
     <div>

        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
     </div>
  </div>)
};

export default App;
