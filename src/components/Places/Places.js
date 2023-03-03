import React, { useEffect, useState } from "react";
import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch(`https://travel-guru-server.onrender.com/hotels`)
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="places">
      {places.map((place) => (
        <Place
          name={place.name}
          key={place.id}
          price={place.price}
          details={place.details}
          img={place.img}
        />
      ))}
    </div>
  );
};

export default Places;
