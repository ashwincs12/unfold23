import React from "react";
import Nav from "./Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChartFill, Calendar, ClockHistory } from "react-bootstrap-icons";

function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Total Reports</p>
              </div>
              <PieChartFill className="icon-size" />
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Monthly Report</p>
              </div>
              <Calendar className="icon-size" />
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Yearly Report</p>
              </div>
              <ClockHistory className="icon-size" />
            </div>
          </div>
          {/* <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3> 
                <p className="fs-5">Yearly Report</p>
              </div>
              <ClockHistory className="icon-size" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
