import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      className=" w-full md:max-w-md
         flex flex-col gap-4 items-center  p-3"
    >
      <div className="w-[124px] rounded-full overflow-hidden">
        <img src={imgURL} className="w-full" alt="testimonial feedback" />
      </div>
      <p className="info-text text-center max-w-sm">{feedback}</p>

      <div className="flex items-center gap-2">
        <img src={star} className="w-[25px] h-[25px]" alt="" />
        <p className="info-text">({rating})</p>
      </div>
      <p className="text-3xl font-semibold font-palanquin capitalize">
        {customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
