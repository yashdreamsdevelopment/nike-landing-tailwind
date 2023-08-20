import React from "react";
import { footerLogo } from "../assets/images";
import { facebook } from "../assets/icons";
import { socialMedia } from "../constants";
import SocialCard from "../components/SocialCard";
import { footerLinks } from "../constants";
import FooterCard from "../components/FooterCard";

const Footer = () => {
  return (
    <footer className="max-container text-white ">
      <section className="flex max-lg:flex-col gap-20 justify-between">
        <div className="max-w-md space-y-5">
          <div className="max-w-[154px]">
            <img
              src={footerLogo}
              className="w-full object-contain"
              alt="nike logo"
            />
          </div>

          <p className="info-text text-white">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex space-x-5">
            {socialMedia.map((social, index) => {
              return <SocialCard key={index} {...social} />;
            })}
          </div>
        </div>

        <section className="flex justify-between flex-wrap flex-1 gap-10 lg:gap-10">
          {footerLinks.map((article, index) => {
            return <FooterCard key={index} {...article} />;
          })}
        </section>
      </section>

      <section className="flex justify-between items-center gap-5 mt-12 py-5 max-md:flex-col">
        <p className="capitalize hover:text-gray">
          &copy; Copyright. All rights reserved
        </p>
        <p className="capitalize hover:text-gray">terms & conditions</p>
      </section>
    </footer>
  );
};

export default Footer;
