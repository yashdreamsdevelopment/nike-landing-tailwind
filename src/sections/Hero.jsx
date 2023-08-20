import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { statistics, shoes } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [shoeColor, setShoeColor] = useState("#581A43");

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  pt-28  max-lg:padding-x ">
        <p className="text-xl tracking-wider text-coral-red capitalize">
          Our summer collections
        </p>
        <h1 className="mt-10 text-8xl font-bold font-palanquin capitalize max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span
            className={`text-coral-red mt-3 inline-block`}
            style={{ color: `${shoeColor}` }}
          >
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          you active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start align-top flex-wrap w-full mt-20 gap-10">
          {statistics.map((stats, index) => {
            return (
              <div className="p-3" key={index}>
                <p className="text-4xl font-bold font-palanquin">
                  {stats.value}
                </p>
                <p className="text-base text-slate-gray font-montserrat mt-3">
                  {stats.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center relative">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => {
            return (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe.bigShoe)}
                  changeShoeColor={(shoe) => setShoeColor(shoe.color)}
                  bigShoeImage={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
