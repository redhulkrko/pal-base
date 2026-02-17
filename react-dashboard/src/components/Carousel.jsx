import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { carouselSlides } from '../data/carouselData';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(carouselSlides[0]);

  const handleSlideChange = (swiper) => {
    setActiveSlide(carouselSlides[swiper.activeIndex]);
  };

  return (
    <header>
      <div className="px-4 hero-wrapper">
        <div className="hero-thumbs">
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={8}
            slidesPerView={3}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="thumbs-swiper"
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img 
                  src={slide.thumbnail} 
                  alt={`${slide.title} thumbnail`}
                  style={{ width: '190px', height: '110px', objectFit: 'cover', cursor: 'pointer' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hero-image-wrap">
          <Swiper
            spaceBetween={10}
            navigation={true}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Pagination, Thumbs]}
            onSlideChange={handleSlideChange}
            className="main-swiper"
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img 
                  className="hero-image" 
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="hero-action-buttons">
                  <button className="btn btn-primary" type="button">Book Now</button>
                  <button className="btn btn-light" type="button">More Info</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="blue-strip">
        <div className="d-flex h-100 justify-content-end align-items-center p3-4">
          <span className="text-white">{activeSlide.status}</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">{activeSlide.screen}</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">{activeSlide.rating}</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">{activeSlide.duration}</span>
        </div>
      </div>
      <div className="ps-3 pe-4 pt-4 card-overlap">
        <h1>{activeSlide.title}</h1>
      </div>
    </header>
  );
};

export default Carousel;
