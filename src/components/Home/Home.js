import React from "react";
import Header from "../Header/Header";
import Places from "../Places/Places";
import "./Home.css";

const Home = () => {
  return (
    <div className="banner">
      <Header />
      <Places />
    </div>
  );
};

export default Home;
