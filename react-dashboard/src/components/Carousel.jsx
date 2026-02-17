import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

const Carousel = () => {
  // Mock data for carousel items
  const carouselItems = [
    {
      id: 1,
      title: 'Welcome to Your Dashboard',
      description: 'Manage all your projects and track performance metrics in one place',
      image: 'https://via.placeholder.com/1200x400/4e73df/ffffff?text=Dashboard+Overview',
      bgColor: '#4e73df'
    },
    {
      id: 2,
      title: 'Track Your Progress',
      description: 'Monitor project completion rates and team productivity with our advanced analytics',
      image: 'https://via.placeholder.com/1200x400/1cc88a/ffffff?text=Analytics+Tools',
      bgColor: '#1cc88a'
    },
    {
      id: 3,
      title: 'Collaborate Effectively',
      description: 'Work together seamlessly with real-time updates and team communication tools',
      image: 'https://via.placeholder.com/1200x400/36b9cc/ffffff?text=Team+Collaboration',
      bgColor: '#36b9cc'
    },
    {
      id: 4,
      title: 'Generate Reports',
      description: 'Create comprehensive reports with just one click and share insights with stakeholders',
      image: 'https://via.placeholder.com/1200x400/f6c23e/ffffff?text=Smart+Reporting',
      bgColor: '#f6c23e'
    }
  ];

  return (
    <div className="carousel-container mb-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="dashboard-carousel"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-slide" style={{ backgroundColor: item.bgColor }}>
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-description">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
