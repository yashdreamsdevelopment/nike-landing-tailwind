import React from "react";

const SocialCard = ({ src, alt }) => {
  return (
    <div className="bg-white p-3 rounded-full hover:scale-110 transition-all">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SocialCard;
