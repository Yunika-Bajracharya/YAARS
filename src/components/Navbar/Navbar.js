import React from "react";
import "./navbar.css";
import { MdPersonPin, MdOutlineNotificationsActive } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
      <div className="sidenav">
        {/* <img src={logo} alt="Logo" className="logo"/> */}
        <h1 className="title">Sahayatri</h1>
        <MdOutlineNotificationsActive
          className="icon__notification"
          size={30}
        />
        <MdPersonPin className="icon__profile" size={30} />
      </div>
    </>
  );
};
