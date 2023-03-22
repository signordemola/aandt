import React from 'react';

//import image
import brickwall from '../assets/images/info/brickwall.jpg';

const Info = () => {
  return (
    <section
      className="bg-white text-body-sm md:text-body-md lg:text-body-lg"
      data-aos="zoom-out"
      data-aos-delay="400"
    >
      <div className="max-w-[1440px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-18 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="h2 py-6">
            Welcome To <span className="text-primary-200">A & T</span>
          </h1>
          <h1 className="h3 capitalize">Construction & Remodelling LLC</h1>
          <div className="flex justify-center py-6">
            <a href='/contact' className="inline-flex text-white bg-primary-200 border-0 py-2 px-6 focus:outline-none hover:bg-primary-500 rounded text-lg">
              Contact Us
            </a>
            <a href='/about' className="ml-4 inline-flex text-primary-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              About Us
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={brickwall}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
