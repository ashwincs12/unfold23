import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar.jsx";
import Home from "./Dashboard.jsx";
import Access from "./Access.jsx";
import { useState } from "react";
import {Routes,Route} from 'react-router-dom'

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid bg-secondary min-vh-100 ">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}{" "}
        {toggle && <div className="col-4 col-md-2"></div>}{" "}
        <div className="col">
          {" "}
          <Routes>
          <Route path='/'
          element={<Home Toggle={Toggle} />}/>{" "}
          <Route path='/access'
          element={<Access Toggle={Toggle} />}/>{" "}
          <Route path='/report'
          element={<Home Toggle={Toggle} />}/>{" "}
          <Route path='/'
          element={<Home Toggle={Toggle} />}/>{" "}
          </Routes>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
