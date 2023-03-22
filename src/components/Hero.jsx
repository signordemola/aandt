import React from 'react';

//import images
import slide1 from '../assets/images/hero/new-home-1664272.jpg';
import slide2 from '../assets/images/hero/painter-2247395.jpg';
import slide3 from '../assets/images/hero/round-table-828546.jpg';
import slide4 from '../assets/images/hero/roof-truss-3339206.jpg';
import slide5 from '../assets/images/hero/sofa-184551.jpg';
import slide6 from '../assets/images/hero/modern-minimalist-bathroom-3115450.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const Hero = () => {
  return (
    <section
      className="h-screen bg-primary-200"
      data-aos="zoom-out"
      data-aos-delay="1000"
    >
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide3}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide4}
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide5}
            alt="Slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={slide6}
            alt="Slide 6"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
