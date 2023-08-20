import React from "react";

import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="max-container max-md:mt-12">
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => {
          return <ServiceCard key={index} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
