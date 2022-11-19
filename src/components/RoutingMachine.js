import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(27.70145289426666, 85.34017796095547),
      L.latLng(27.69511765611941, 85.34062256946451),
      L.latLng(27.688400495965407, 85.33572172075587)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
