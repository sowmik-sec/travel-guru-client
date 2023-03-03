import "./PlaceDetails.css";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
  const hotelDetails = useLoaderData();
  const { name, img, details, price } = hotelDetails;
  return (
    <div className="details">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>${price}</p>
      <p>{details}</p>
      <Link to="/book">
        <button className="btn-card">Book Now</button>
      </Link>
    </div>
  );
};

export default PlaceDetails;
