import React from "react";
import "./carts.css";
import { MdPersonPin, MdOutlineNotificationsActive } from "react-icons/md";
import cart1 from "../../assets/2.png";
import cart2 from "../../assets/3.png";
import cart3 from "../../assets/4.png";
import cart4 from "../../assets/5.png";

export const Carts = () => {
  return (
    <>
      <div className="cart__section">
        <div className="cart">
          <img src={cart1} className="cart__img"></img>
          <div className="text__section">
            Total School Buses <br />
            <span className="number">3</span>
          </div>
        </div>
        <div className="cart">
          <img src={cart2} className="cart__img"></img>
          <div className="text__section">
            Moving Buses <br />
            <span className="number">2</span>
          </div>
        </div>
        <div className="cart">
          <img src={cart3} className="cart__img"></img>
          <div className="text__section">
            Parked Buses <br />
            <span className="number">1</span>
          </div>
        </div>
        <div className="cart">
          <img src={cart4} className="cart__img"></img>
          <div className="text__section">
            Idle Buses <br />
            <span className="number">0</span>
          </div>
        </div>
      </div>
    </>
  );
};
