import React from 'react';

const Carousel = () => {
  return (
    <header>
      <div className="px-4 hero-wrapper">
        <div className="hero-thumbs">
          <img 
            src="https://www.ecartelera.com/images/noticias/80800/80857-h3.webp" 
            alt="Movie thumbnail 1"
          />
          <img 
            src="https://comicbook.com/wp-content/uploads/sites/4/2025/04/thunderbolts-poster-header.jpg" 
            alt="Movie thumbnail 2"
          />
          <img 
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1DvC7k.img" 
            alt="Movie thumbnail 3"
          />
        </div>
        <div className="hero-image-wrap">
          <img 
            className="hero-image" 
            src="https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/12/ana-de-armas-in-ballerina.jpg"
            alt="Featured movie"
          />
          <div className="hero-action-buttons">
            <button className="btn btn-primary" type="button">Book Now</button>
            <button className="btn btn-light" type="button">More Info</button>
          </div>
        </div>
      </div>
      <div className="blue-strip">
        <div className="d-flex h-100 justify-content-end align-items-center p3-4">
          <span className="text-white">Now Showing</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">Screen 1</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">PG</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">145 mins</span>
        </div>
      </div>
      <div className="ps-3 pe-4 pt-4 card-overlap">
        <h1>FROM THE WORLD OF JOHN WICK: BALLERINA</h1>
      </div>
    </header>
  );
};

export default Carousel;
