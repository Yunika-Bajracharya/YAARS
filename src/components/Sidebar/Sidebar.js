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
            {props.data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setButtonTitle(item.name);
                    setChildren(item.children);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </button>
      </div>

      <h2>Children</h2>
      <hr />

      <ul>
        {children.map((item, index) => {
          return (
            <li className="children__card" key={index}>
                <div className="childName">{item.name}</div>
                <div className="childLocation">{item.location}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
