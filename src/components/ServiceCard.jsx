import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-xl rounded-3xl ring-1 ring-slate-50 flex-1 sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="flex flex-col py-14 px-9 md:px-12 gap-3">
        <div className="w-[40px] h-[40px] bg-coral-red rounded-full flex justify-center items-center">
          <img
            src={imgURL}
            className="w-[20px] h-[20px]"
            alt={label + " icon"}
          />
        </div>

        <h2 className="text-3xl font-bold font-palanquin capitalize">
          {label}
        </h2>

        <p className="text-lg leading-7 text-slate-gray font-montserrat">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
