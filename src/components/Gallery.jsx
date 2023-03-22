import React from 'react';

//import images
import img1 from '../assets/images/gallery/furniture-998265.jpg';
import img2 from '../assets/images/gallery/house-1477041.jpg';
import img3 from '../assets/images/gallery/interior-2685521.jpg';
import img4 from '../assets/images/gallery/kitchen-6914223.jpg';
import img5 from '../assets/images/gallery/space-3197606.jpg';
import img6 from '../assets/images/gallery/tap-791172.jpg';

const Gallery = () => {
  return (
    <section
      className="text-body-sm md:text-body-md lg:text-body-lg bg-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="py-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img1}
                />
              </div>
            </div>
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img2}
                />
              </div>
            </div>
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img3}
                />
              </div>
            </div>
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img4}
                />
              </div>
            </div>
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img5}
                />
              </div>
            </div>
            <div className="flex lg:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-[3px] object-cover object-center"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
