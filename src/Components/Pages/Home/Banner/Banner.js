import React from "react";
import GTR from "../../../Assets/gtr.png";
import { GiCarKey, GiAutoRepair } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { FcEngineering } from "react-icons/fc";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="main-content-area clearfix">
      <section className="custom-padding about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="title">
                <h3>
                  About{" "}
                  <span className="heading-color">Wonder Automotive </span> Cars
                </h3>
              </div>
              <div className="content">
                <p className="service-summary fs-3">
                  Everything you need to build an amazing dealership automotive
                  responsive website
                </p>
                <p>
                  Carspot is not only a hub where buyers and sellers can
                  interact, it is also a comprehensive automotive portal with a
                  forum dedicated to all automotive discussions, a blog that
                  keeps the users up to date with the latest happenings in the
                  automotive industry.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img
                className="wow slideInRight center-block img-responsive w-100"
                data-wow-delay="0ms"
                data-wow-duration="3000ms"
                alt=""
                src={GTR}
              />
            </div>
          </div>
          <div className="row margin-top-20">
            <div className="col-md-3 col-xs-12 col-sm-6">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-key">
                    <GiCarKey></GiCarKey>
                  </i>
                </div>
                <h4>Dealership</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-6">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-engine-2">
                    <FcEngineering></FcEngineering>
                  </i>
                </div>
                <h4> Engine Upgrades</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-6">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-security">
                    <GrShieldSecurity></GrShieldSecurity>
                  </i>
                </div>
                <h4> Security Inspections</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-6">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-disc-brake-1">
                    <GiAutoRepair></GiAutoRepair>
                  </i>
                </div>
                <h4>Break Checkup</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
