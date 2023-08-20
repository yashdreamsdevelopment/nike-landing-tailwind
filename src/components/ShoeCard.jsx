import React from "react";

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImage,
  changeShoeColor,
}) => {
  const handleClick = () => {
    changeBigShoeImage(imgURL);
    changeShoeColor(imgURL);
  };
  return (
    <div
      className={`border-2 rounded-xl opacity-80 ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red shadow-xl shadow-slate-500 opacity-100"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-center bg-cover sm:w-40 sm:h-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
