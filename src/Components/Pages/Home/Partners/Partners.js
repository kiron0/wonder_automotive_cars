import React from "react";
import alfa from '../../.././Assets/car-logo/alfa.png';
import audi from '../../.././Assets/car-logo/audi-logo-2.png';
import bmw from '../../.././Assets/car-logo/bmw.png';
import cheverolet from '../../.././Assets/car-logo/cheverolet.png';
import ferrari from '../../.././Assets/car-logo/ferrari.png';
import ford from '../../.././Assets/car-logo/ford.png';
import honda from '../../.././Assets/car-logo/honda.png';
import kia from '../../.././Assets/car-logo/kia.png';
import mercedes from '../../.././Assets/car-logo/mercedes.png';
import mg from '../../.././Assets/car-logo/mg.png';
import tesla from '../../.././Assets/car-logo/tesla.png';
import toyota from '../../.././Assets/car-logo/toyota.png';
import './Partners.css';

const Partners = () => {
  return (
    <div className="logos">
      <p className="text-center fs-5">Thank For Supporting</p>
      <h2 className="text-center title fs-1">Our <span className="heading-color">Partners</span></h2>
      <div className="car-logo">
          <img src={alfa} alt="alfa" />
          <img src={audi} alt="audi" />
          <img src={bmw} alt="bmw" />
          <img src={cheverolet} alt="cheverolet" />
          <img src={ferrari} alt="ferrari" />
          <img src={ford} alt="ford" />
          <img src={honda} alt="honda" />
          <img src={kia} alt="kia" />
          <img src={mercedes} alt="mercedes" />
          <img src={mg} alt="mg" />
          <img src={tesla} alt="tesla" />
          <img src={toyota} alt="toyota" />
      </div>
    </div>
  );
};

export default Partners;
