import logo from "../assets/logo.svg";
import hamMenu from "../assets/menu.svg";
import closeBtn from "../assets/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav>
      <div className="container mx-auto max-w-[1250px] flex  items-center justify-between">
        <a href="" className="logo">
          <img
            src={logo}
            alt="logo"
            className="w-[150px] h-[150px] object-contain"
          />
        </a>
        <ul className="items-center hidden gap-8 md:flex">
          <li>
            <a href="#about" className="link hover:text-[#ddd] duration-300">
              About us
            </a>
          </li>
          <li>
            <a href="#feature" className="link hover:text-[#ddd] duration-300">
              Feature
            </a>
          </li>
          <li>
            <a href="#solution" className="link hover:text-[#ddd] duration-300">
              Solution
            </a>
          </li>
        </ul>
        <div className="toggle-mobile-nav md:hidden">
          <button onClick={handleNav}>
            <img
              src={hamMenu}
              alt=""
              className="w=[20px] h-[20px] object-contain translate-y-2"
            />
          </button>
        </div>
        <ul
          className={
            nav
              ? "fixed top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center gap-8 text-6xl font-bold text-white bg-black mobile-nav duration-200"
              : "fixed top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center gap-8 text-6xl font-bold text-white bg-black mobile-nav translate-y-[-100%]"
          }
        >
          <button
            className="absolute close-btn top-12 right-12"
            onClick={handleNav}
          >
            <img src={closeBtn} alt="" className="w=[20px] h-[20px]" />
          </button>
          <li>
            <a
              href="#about"
              className="link hover:text-primary duration-250"
              onClick={handleNav}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#feature"
              className="link hover:text-primary duration-250"
              onClick={handleNav}
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="#solution"
              className="link hover:text-primary duration-250"
              onClick={handleNav}
            >
              Solution
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
