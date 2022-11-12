import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import "./mapView.css";
import {getHistoryData, getBussesData } from "../firebase";
import { Navbar } from "./Navbar/Navbar";
import { Carts } from "./Carts/Carts";
import { Sidebar } from "./Sidebar/Sidebar";
import { childernData } from "./Sidebar/Data";

import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 27.691025218551726 , lng: 85.33932172849848 },
    zoom: 13,
    data,
  });
  const [locationHistory, setLocationHistory] = useState([])

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    async function updateMap() {
      console.log("called")
      console.log(state);
      const busses = await getBussesData();
      setState({
        ...state,
        data: {
          venues: busses
        }
      })
    }
    async function updateLocations(position){
        const busses = await getBussesData();
        const historyData = await getHistoryData()
        setState({
          ...state,
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          data: {
            venues: busses,
          },
        });
        setLocationHistory(historyData);
        console.log(historyData);
    }
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        updateLocations(position)
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
    const interval = setInterval(() => updateMap(), 20000)
  }, []);

  useEffect(() => {
    // Some hard coded magic
    console.log(props);

    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      history.replace({
        pathname: "/map",
        state: {},
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Carts />

      <div className="map__home">
        <div className="sidebar">
          <Sidebar data={childernData} />
        </div>
        <div className="map">
          <Map center={state.currentLocation} zoom={state.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers venues={state.data.venues} />
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapView;
