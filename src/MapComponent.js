import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import Point from "@arcgis/core/geometry/Point";

// Replace with the path to your pin image


const MapComponent = ({ latitude, longitude }) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      // Initialize the map
      const webmap = new Map({
        basemap: "streets" // Specify a valid basemap
      });

      // Create the view
      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [longitude, latitude], // Center the map on the given coordinates
        zoom: 15 // Adjust zoom level as needed
      });

      // Define the location point
      const point = new Point({
        longitude: longitude,
        latitude: latitude
      });

      // Create a PictureMarkerSymbol using the custom image
      const pinSymbol = new PictureMarkerSymbol({
        url: "https://cdn2.iconfinder.com/data/icons/social-media-8/512/pointer.png", // URL to the image file
        width: "48px", // Width of the image
        height: "48px" // Height of the image
      });

      // Create a graphic for the marker
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: pinSymbol
      });

      // Add the graphic to the view
      view.graphics.add(pointGraphic);

      return () => view && view.destroy();
    }
  }, [latitude, longitude]);

  return <div className="mapDiv" ref={mapDiv} style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapComponent;
