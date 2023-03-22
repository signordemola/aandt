import React, { useState } from 'react';

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';

import logo from '../assets/images/logo/logo.png';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <section
      className="bg-white fixed left-0 right-0 z-30 border border-b-primary-200"
      data-aos="zoom-out"
      data-aos-delay="100"
    >
      <header className=" font-semibold max-w-[1440px] py-2  mx-auto flex justify-between items-center px-[20px] lg:px-[80px]  transition-all duration-300">
        {/* logo */}
        <a href="/">
          <img className="h-[70px] w-full" src={logo} alt="Logo" />
        </a>

        {/* nav - initially hidden - show in desktop mode */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-x-8  uppercase">
            <li>
              <a href="/" className="hover:text-primary-200 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-primary-200 transition">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-primary-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* buttons - initally hidden - show in desktop mode */}
        <div className="hidden lg:flex">
          <a
            href="/contact"
            className=" rounded-full p-3 text-2xl text-white bg-primary-200 hover:bg-primary-500 transition"
          >
            <AiOutlineMail className="w-full h-full" />
          </a>
        </div>

        {/* nav menu button - hide on desktop */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden absolute right-4"
        >
          {navMobile ? (
            <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
          )}
        </div>

        {/* nav mobile - hide on desktop */}
        <nav
          className={`${
            navMobile ? 'min-h-screen' : 'min-h-0'
          } w-full fixed top-0 left-0 right-0 bg-white -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
        >
          <ul className="w-full uppercase top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
            <li>
              <a href="/" className="hover:text-primary-200 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-primary-200 transition">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-primary-200 transition">
                Contact
              </a>
            </li>
          </ul>
          {/* buttons */}
          <div className="-mt-44 flex justify-center gap-x-8">
            <a
              href="/contact"
              className=" rounded-full p-3 text-2xl text-white bg-primary-200 hover:bg-primary-500 transition"
            >
              <AiOutlineMail className="w-full h-full" />
            </a>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
