import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import notfound from '../../../Assets/logo/404.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <PageTitle title="404"></PageTitle>
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
