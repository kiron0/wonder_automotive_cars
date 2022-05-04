import React from "react";
import CountUp from "react-countup";
import { VscShield } from "react-icons/vsc";
import { GiSteeringWheel, GiTrophyCup } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import "./StatisticsCounter.css";

const StatisticsCounter = () => {
  return (
    <div className="funfacts custom-padding parallex">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="icons">
              <GiSteeringWheel
                style={{ fontSize: "5rem", color: "#fff" }}
              ></GiSteeringWheel>
            </div>
            <div className="number">
              <span>
                <CountUp delay={1} end={1238} duration={1.5} />
              </span>
              +
            </div>
            <h4>
              Total <span>Cars</span>
            </h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="icons">
              <VscShield
                style={{ fontSize: "5rem", color: "#fff" }}
              ></VscShield>
            </div>
            <div className="number">
              <span
              >
                <CountUp delay={1} end={820} duration={1.5} />
              </span>
              +
            </div>
            <h4>
              Verified <span>Dealers</span>
            </h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="icons">
              <FiHeart style={{ fontSize: "5rem", color: "#fff" }}></FiHeart>
            </div>
            <div className="number">
              <span
              >
                <CountUp delay={1} end={1042} duration={1.5} />
              </span>
              +
            </div>
            <h4>
              Active <span>Users</span>
            </h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="icons">
              <GiTrophyCup style={{ fontSize: "5rem", color: "#fff" }}></GiTrophyCup>
            </div>
            <div className="number">
              <span
              >
                <CountUp delay={1} end={34} duration={1.5} />
              </span>
              +
            </div>
            <h4>
              Featured <span>Ads</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCounter;
