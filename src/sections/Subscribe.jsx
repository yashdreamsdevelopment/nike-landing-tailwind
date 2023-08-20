import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container max-md:mt-12">
      <div className="flex items-center justify-between max-lg:flex-col gap-10">
        <div className="w-full lg:max-w-lg md:pr-5">
          <h2 className="text-4xl font-bold capitalize font-palanquin">
            sign up for <span className="text-coral-red">updated</span> &
            newsletter
          </h2>
        </div>
        <div className="w-full lg:max-w-[45%]">
          <div className="flex max-md:gap-3 justify-between max-md:flex-col md:relative md:rounded-full md:border md:border-slate-gray p-1">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="subscribe@nike.com"
              className="flex-1 font-montserrat py-5 px-4 w-full outline-none border-1 rounded-full placeholder:font-palanquin text-lg max-md:border max-md:border-slate-gray"
            />
            <Button label="Sign Up" className="whitespace-nowrap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
