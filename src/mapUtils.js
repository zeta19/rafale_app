import mapStyles from "./mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 13.581921,
  lng: 68.310452,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const pathCoordinates = [
  { lat: 48.864716, lng: 2.349014 },
  { lat: 30.37818, lng: 76.776695 },
];

const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};

export {
  libraries,
  mapContainerStyle,
  center,
  options,
  pathCoordinates,
  lineSymbol,
};
