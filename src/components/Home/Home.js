import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="banner">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
