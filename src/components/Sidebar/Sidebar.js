import React from "react";
import "./sidebar.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Sidebar = () => {
  const bus = 1;
  return (
    <>
      <div className="sidebar__nav">
        Buses:
        <button className="dropdown">
          <span>
            Choose &nbsp; <MdKeyboardArrowDown />
          </span>
          <ul className="dropdown-content">
            <button className="dropdown-item" onClick={() => 1}>
              Bus A
            </button>
            <button className="dropdown-item" onClick={() => 1}>
              Bus B
            </button>{" "}
            <button className="dropdown-item" onClick={() => 1}>
              Bus C
            </button>
          </ul>
        </button>
      </div>

      <h2>Children</h2>
      <hr />
      <ul>
        <li>Ramesh Shiwakoti</li>
        <li>Gyanu Dhahal</li>
        <li>Bishal Karki</li>
        <li>Manita Shakya</li>
        <li>Kusum Pant</li>
        <li>Dilasha Rai</li>
        <li>Krish Bajracharya</li>
        <li>Anuj Awasthi</li>
        <li>Ruja Silwal</li>
        <li>Nisha Shrestha</li>
        <li>Ganesh Chhetri</li>
      </ul>
    </>
  );
};
