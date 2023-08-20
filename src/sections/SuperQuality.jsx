import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container max-sm:mt-12">
      <div className="flex max-lg:flex-col gap-10 justify-between items-center">
        <div className="flex-1 flex flex-col items-start gap-8 max-w-lg ">
          <h2 className="text-4xl font-bold capitalize font-palanquin">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h2>
          <p className="font-montserrat text-lg text-slate-gray">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="font-montserrat text-lg text-slate-gray">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <Button label="view details"></Button>
        </div>
        <div className="p-1">
          <img
            src={shoe8}
            className="w-[570px] h-[522px0] object-contain"
            alt="super quality shoes"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
