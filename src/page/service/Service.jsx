import React from "react";
import "../../css/service.css";
import Card from "../../components/card/Card";
import { servicedata } from "../../store/servicedata";
const Service = () => {
  return (
    <div className="service">
      <h1>Service</h1>
      <div className="service-card">
        <Card item={servicedata} />
      </div>
    </div>
  );
};

export default Service;
