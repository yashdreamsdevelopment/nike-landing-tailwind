import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container max-md:mt-12  ">
      <div className=" max-w-xl text-center m-auto">
        <h2 className="text-4xl font-bold capitalize font-palanquin">
          what our <span className="text-coral-red">customer</span> says?
        </h2>
        <p className="info-text mt-4">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-20 flex flex-row max-md:flex-col justify-between gap-5 ">
        {reviews.map((review, index) => {
          return <ReviewCard key={index} {...review} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
