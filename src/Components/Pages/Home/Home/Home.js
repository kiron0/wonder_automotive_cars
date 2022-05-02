import React from "react";
import "./Home.css";
import Car from "../../../Assets/car.jpg";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="home" id="home">
      <PageTitle title="Home"></PageTitle>
      <div className="home-info reverse">
        <p className="text-muted">50% OFF EVERYTHING</p>
        <h1>New Cars Arrivals</h1>
        <h3>We offer free shipping on all orders over $350.</h3>
        <br />
        <a className="explore-btn" href="#explore">
          Explore more
        </a>
      </div>
      <div className="car-img">
        <img src={Car} alt="" />
      </div>
    </div>
  );
};

export default Home;