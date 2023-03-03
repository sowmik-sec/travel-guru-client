import "./Place";
import React from "react";
import "./Place.css";
import { Link } from "react-router-dom";

const Place = ({ name, price, details, img }) => {
  const handleFunction = (name, price, details, img) => {
    console.log(name, price);
  };
  return (
    <div
      onClick={() => handleFunction(name, price, details, img)}
      className="place-card"
    >
      <img src={img} alt="" />
      <div>{name}</div>
      <div>${price}</div>
      <div>{details}</div>
      <Link to="placeDetails">
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Place;
