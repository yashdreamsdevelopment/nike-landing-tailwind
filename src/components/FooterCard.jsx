import React from "react";

const FooterCard = ({ title, links }) => {
  return (
    <div className="space-y-10">
      <h3 className="text-2xl font-semibold font-montserrat capitalize">
        {title}
      </h3>

      <ul className="space-y-5">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="text-md font-montserrat hover:text-slate-gray transition-all"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCard;
