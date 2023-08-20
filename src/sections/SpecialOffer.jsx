import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="max-container max-md:mt-12">
      <div className="flex max-lg:flex-col gap-10 justify-between items-center">
        <div className=" flex-1 p-1">
          <img src={offer} className="w-full" alt="" />
        </div>
        <div className=" flex-1 flex flex-col items-start gap-8 max-lg:-order-1">
          <h2 className="text-4xl font-bold capitalize font-palanquin">
            <span className="text-coral-red">special</span> offer
          </h2>
          <p className="info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="flex max-md:flex-col gap-5">
            <Button label="shop now" iconURL={arrowRight} />
            <Button label="shop now" alt={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
