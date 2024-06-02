import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Navbaar/Navbaar.css";
import search from "../../assets/search.svg";
import Avatar from "../../Components/Avatar/Avatar";

const Navbaar = () => {
  var User = null;

  return (
    <nav>
      <div className="navbaar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="" width={200} />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form className="search">
          <img
            src={search}
            alt=""
            width={18}
            className="
            search-icon"
          />
          <input type="text" placeholder="Search..." />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log In
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
              marginRight="30px"
            >
              <Link to="/User" style={{ color: "white", textDecoration: "none" }}>
                K
              </Link>
            </Avatar>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbaar;
