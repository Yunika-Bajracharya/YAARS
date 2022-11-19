import React, { useState, useEffect } from "react";
import { MapContainer as Map, TileLayer, Polyline } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import "./mapView.css";
import { getHistoryData, getBussesData } from "../firebase";
import { Navbar } from "./Navbar/Navbar";
import { Carts } from "./Carts/Carts";
import { Sidebar } from "./Sidebar/Sidebar";
import { childernData } from "./Sidebar/Data";

import { useLocation, useNavigate } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 27.691025218551726 , lng: 85.33932172849848 },
    zoom: 13,
    data,
  });
  const [locationHistory, setLocationHistory] = useState([])
  const [highlightedRoute, sethighlighedRoute] = useState([])
  const limeOptions = { color: 'green' }

  const location = useLocation();
  const navigate = useNavigate();

  function showRoute(data){
    const parsedData = data.map(m => [m._lat, m._long])
    sethighlighedRoute(parsedData
    )
  }

  async function updateMap() {
      const busses = await getBussesData();
      const templocationData = await busses[0].geometry
      console.log(templocationData)
      console.log(locationHistory)
      setLocationHistory([...locationHistory, templocationData])
      setState({
        ...state,
        data: {
          venues: busses
        }
    })
  }
  useEffect(() => {
    async function updateLocations(position){
        const busses = await getBussesData();
        // const historyData = await getHistoryData()
        const templocationData = busses[0].geometry
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
        setLocationHistory([...locationHistory, templocationData])
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
    const interval = setInterval(() => updateMap(), 1000)
  }, []);


  // useEffect(() => {
  //   // Some hard coded magic
  //   if (location.state.latitude && location.state.longitude) {
  //     const currentLocation = {
  //       lat: location.state.latitude,
  //       lng: location.state.longitude,
  //     };
  //     setState({
  //       ...state,
  //       data: {
  //         venues: state.data.venues.concat({
  //           name: "new",
  //           geometry: [currentLocation.lat, currentLocation.lng],
  //         }),
  //       },
  //       currentLocation,
  //     });
  //     navigate("/map");
  //   }
  // }, [location]);

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
            <Polyline pathOptions={limeOptions} positions={highlightedRoute} />
            <Markers venues={state.data.venues} showRoute={showRoute}/>
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapView;
