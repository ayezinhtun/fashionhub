import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users
} from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://i.ibb.co/N2qHDY3M/young-japanese-woman-portrait-copy-space.jpg',
      title: 'Step into Style',
      subtitle: 'Discover the latest trends in fashion and electronics. Shop now and elevate your look.',
    },
    {
      image: 'https://i.ibb.co/jjRTVzQ/collection-beauty-products-with-copy-space.jpg',
      title: 'Radiant Beauty Collection',
      subtitle: 'Discover premium skincare and cosmetics for your everyday glow',
    },
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative container rounded-3 overflow-hidden" style={{ height: '90vh' }}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`position-absolute top-0 start-0 w-100 h-100 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1s ease-in-out'
            }}
          >
            <div className="w-100 h-100 bg-dark bg-opacity-25 d-flex flex-column justify-content-end align-items-start text-white text-center px-3 pb-5">
              <h1 className="display-3 fw-bold">{slide.title}</h1>
              <p className="lead mb-4">{slide.subtitle}</p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/product" className="btn btn-lg fw-semibold" style={{ backgroundColor: '#E8B5B8' }}>
                  Explore More
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg fw-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3 p-2 rounded-circle opacity-75"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3 p-2 rounded-circle opacity-75"
        >
          <ChevronRight />
        </button>

        {/* Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-4">
          {heroSlides.map((_, index) => (
           <button
              key={index}
              className="btn rounded-circle p-1"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: index === currentSlide ? '#E8B5B8' : 'rgba(255, 255, 255, 0.5)',
                opacity: index === currentSlide ? 1 : 0.5
              }}
              onClick={() => setCurrentSlide(index)}
            />

          ))}
        </div>

       
      </section>
    </div>
  );
};

export default HeroSlider;
