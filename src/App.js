import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  GoogleMap,
  useLoadScript,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import {
  libraries,
  mapContainerStyle,
  center,
  options,
  pathCoordinates,
  lineSymbol,
} from "./mapUtils";

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7UcwhVeCFwrRvLAZIcmhArWnPutCG3oI",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={3}
        center={center}
        options={options}
      >
        <Polyline
          path={pathCoordinates}
          options={{
            geodesic: true,
            strokeColor: "#00ffff",
            strokeOpacity: 0,
            strokeWeight: 2,
            icons: [
              {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        />
        <Marker position={{ lat: 48.864716, lng: 2.349014 }} label="Paris" />
        <Marker position={{ lat: 30.37818, lng: 76.776695 }} label="Ambala" />
      </GoogleMap>
    </div>
  );
}

export default App;
