import React from "react";
import Nav from "./Navbar";
import Sidebar from "./Sidebar";

export default function Access({ Toggle }) {
  return (
    <>
      <div className="px-3">
        <Nav Toggle={Toggle} />
        <div className="container-fluid ">
          <div className="row g-3 my-2">
            <div className="col-md-4 p-1">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded p-5">
                <div>
                  <h3 className="fs-2">Grand Access</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-1">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded p-5">
                <div>
                  <h3 className="fs-2">Revolke Access</h3>
                </div>
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
    </>
  );
}
