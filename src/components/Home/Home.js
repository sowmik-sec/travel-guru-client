import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Places from "../Places/Places";
import "./Home.css";

const Home = () => {
  return (
    <div className="banner">
      <Header />
      {/* <Places /> */}
      <Outlet />
    </div>
  );
};

export default Home;
