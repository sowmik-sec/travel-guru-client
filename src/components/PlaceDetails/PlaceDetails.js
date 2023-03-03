import "./PlaceDetails.css";
import React from "react";
import { useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
  const hotelDetails = useLoaderData();
  const { name, img, details, price } = hotelDetails;
  return (
    <div className="details">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>${price}</p>
      <p>{details}</p>
      <button className="btn-card">Book Now</button>
    </div>
  );
};

export default PlaceDetails;
