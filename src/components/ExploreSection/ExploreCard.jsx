import React from "react";
import "./ExploreSection.css";
import { Link } from "react-router-dom";
const ExploreCard = () => {
  return (
    <div className="CardExplore w-full md:w-1/4">
      <h3 className="titleEx">Explore our Seoul.</h3>
      <div className="desbtn">
        <p>200 hotels, 345 local flights and 234 bus providers</p>
        <Link to="/single" >Explore</Link>
      </div>
    </div>
  );
};

export default ExploreCard;
