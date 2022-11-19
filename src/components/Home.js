import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div className="container">
      <h1 className="home__welcome">Welcome!</h1>
      <Link
        to={{
          pathname: "/map",
          state: state,
        }}
      >
        <button className="home__button">Log In</button>
      </Link>
    </div>
  );
};

export default Home;
