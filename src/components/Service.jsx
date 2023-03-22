import React from 'react';

// import images
import kitchen from '../assets/images/services/kitchen.jpg';
import bathroom from '../assets/images/services/bathroom.jpg';
import wood from '../assets/images/services/wood.jpg';

const Service = () => {
  return (
    <section className="max-w-[1440px] mx-auto text-body-sm md:text-body-md lg:text-body-lg overflow-hidden">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="sm:text-4xl text-3xl font-medium text-gray-900">
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div
            className="p-4 lg:w-1/3 w-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white shadow-lg">
                <div>
                  <img className="rounded-t-lg" src={kitchen} alt="" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-semibold leading-tight text-primary-500">
                    Kitchen Remodeling
                  </h5>
                  <p className="mb-4 text-base text-neutral-600">
                    When we first started doing this, we did not realize how
                    much of a success it would be. But hard work always
                    prevails, and we can honestly say that no customer has ever
                    been dissatisfied with our service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-4 lg:w-1/3 w-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white shadow-lg">
                <div>
                  <img className="rounded-t-lg" src={bathroom} alt="" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-semibold leading-tight text-primary-500">
                    Bathroom Remodeling
                  </h5>
                  <p className="mb-4 text-base text-neutral-600">
                    Our bathroom remodeling service is second-to-none, and has
                    been honed with many customers over many years. We only work
                    with the best people, and we would love for you to be one of
                    them!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-4 lg:w-1/3 w-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white shadow-lg">
                <div>
                  <img className="rounded-t-lg" src={wood} alt="" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-semibold leading-tight text-primary-500">
                    Floor Remodeling
                  </h5>
                  <p className="mb-4 text-base text-neutral-600">
                    With our extensive floor industry knowledge & know-how, you
                    are in the best scenario working with us. You can rest
                    assured knowing that we have seen it all and done it all,
                    rest assured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
