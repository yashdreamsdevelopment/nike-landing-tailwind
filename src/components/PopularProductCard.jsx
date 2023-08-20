import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-auto transition-transform ease-in-out group-hover:scale-105">
        <img src={imgURL} className="w-full " alt="shoe collection" />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-xl text-slate-gray flex gap-1">
          <img src={star} className="w-[20px] h-[20px]" alt="star-rating" />
          (4.5)
        </p>
        <p className="text-2xl font-semibold font-palanquin mt-3">{name}</p>
        <p className="text-2xl font-bold text-coral-red mt-2 font-montserrat">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
