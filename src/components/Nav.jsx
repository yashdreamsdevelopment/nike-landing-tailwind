import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            );
          })}

          <li>
            <a
              href="#"
              className="font-montserrat leading-normal text-xl font-semibold text-slate-gray"
            >
              sign in / Explore now
            </a>
          </li>
        </ul>

        <div>
          <img
            src={hamburger}
            width={25}
            height={25}
            className="hidden max-lg:block"
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
