import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Speedometer2,
  ShieldLock,
  ExclamationOctagonFill,
} from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      {" "}
      <div className="m-2">
        {" "}
        <span className="brand-name fs-4">CRS</span> <img src="" alt="" />
      </div>{" "}
      <hr className="text-dark" />{" "}
      <div className="list-group list-group-flush">
        {" "}
        <a className="list-group-item py-2">
          {" "}
          <Speedometer2 className="icon-size-side" />
          <span>Dashboard</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2 ">
          {" "}
          <ShieldLock className="icon-size-side" />
          <span>Access</span>{" "}
        </a>{" "}
        <a className="list-group-item py-2 ">
          {" "}
          <ExclamationOctagonFill className="icon-size-side" />
          <span>Reports</span>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}
export default Sidebar;
