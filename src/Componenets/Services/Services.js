import React from "react";
import "./services.css";
import { programsData } from "../../Data/Program_data";

function Services() {
  return (
    <div className="services" id="services">
      <div className="services-header">
        <span className="stroke-text">EXPLORE</span> <span>OUR</span>{" "}
        <span className="stroke-text">SERVICES</span>
      </div>
      <div className="service-categories">
        {programsData.map((service) => (
          <div className="category">
            {service.image}
            <span>{service.heading}</span> <span>{service.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img   src="image/join.png"/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
