import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p style={{ padding: "10px" }} >PUBLIC</p>
          </div>
          <NavLink to="/Questions" className="side-nav-links">
            <p >Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links">
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-links">
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
