import React from "react";
import "./Home.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import HomeInventory from "../HomeInventory/HomeInventory";
import StatisticsCounter from "../StaticticsCouter/StatisticsCounter";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Partners from "../Partners/Partners";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <div className="home">
      <PageTitle title="Home" />
      <div
        id="carouselExampleCaptions"
        className="carousel slide home-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" alt="" />
            <div className="carousel-caption d-md-block">
              <h1>Find Your Dream Car</h1>
              <p>
              Our Wonder Automotive Cars experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block" alt="" />
            <div className="carousel-caption d-md-block">
              <h1>We have many opportunities</h1>
              <h1>for you</h1>
              <p>
                Only we have the best facilities in the world, which no one else
                can give. We are always best at your service.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block" alt="" />
            <div className="carousel-caption d-md-block">
              <h1>Top car's comparison</h1>
              <h1>for you</h1>
              <p>
              When it comes to buying a car, everyone has different priorities. Wonder Automotive Cars comes with excellent car comparison features that suits your needs.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block" alt="" />
            <div className="carousel-caption d-md-block">
              <h1>There are many companies</h1>
              <h1>with us</h1>
              <p>
                We have a lot of companies in the world who helping us We took
                some moments with them in the photo gallery
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <Banner></Banner>
      <div className="featured">
        <h1>
          Our Latest <span className="heading-color"> Featured</span> Cars
        </h1>
      </div>
      <HomeInventory></HomeInventory>
      <StatisticsCounter></StatisticsCounter>
      <Partners></Partners>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Home;
