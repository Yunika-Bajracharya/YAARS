import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { busA, childernData } from "./Data";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Sidebar = (props) => {
  const [children, setChildren] = useState([]);
  const [buttonTitle, setButtonTitle] = useState("Choose");
  return (
    <>
      <div className="sidebar__nav">
        Buses:
        <button className="dropdown">
          <span>
            {buttonTitle} &nbsp; <MdKeyboardArrowDown />
          </span>
          <ul className="dropdown-content">
            {props.data.map((item) => {
              return (
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setButtonTitle(item.name);
                    setChildren(item.children);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </ul>
        </button>
      </div>

      <h2>Children</h2>
      <hr />

      {children.map((item) => {
        return (
          <div className="children__card">
            <div className="childName">{item.name}</div>
            <div className="childLocation">{item.location}</div>
          </div>
        );
      })}
    </>
  );
};
