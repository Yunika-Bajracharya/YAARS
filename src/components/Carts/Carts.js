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
        </div>
        <div className="cart">
          <img src={cart2} className="cart__img"></img>
        </div>
        <div className="cart">
          <img src={cart3} className="cart__img"></img>
        </div>
        <div className="cart">
          <img src={cart4} className="cart__img"></img>
        </div>
      </div>
    </>
  );
};
