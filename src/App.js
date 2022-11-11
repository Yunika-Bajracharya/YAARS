import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "./components/MapView";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Carts } from "./components/Carts/Carts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <Navbar />
          <Carts />
          <MapView />;
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
