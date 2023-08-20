import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <h2 className="text-4xl font-bold capitalize font-palanquin">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="mt-5 font-palanquin text-base md:text-lg md:leading-10 text-slate-gray sm:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="mt-14 grid gap-8  grid-cols-1 place-items-center | sm:gap-6 sm:place-items-start sm:grid-cols-2 | md:grid-cols-3 | lg:grid-cols-4">
        {products.map((product) => {
          return <PopularProductCard {...product} />;
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
