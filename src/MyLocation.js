import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

function MyLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <div>
      <h2>My Current Location</h2>
      {position.latitude && position.longitude ? (
        <MapComponent latitude={position.latitude} longitude={position.longitude}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyLocation;