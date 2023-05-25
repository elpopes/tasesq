import React, { useState, useEffect } from 'react';
import HeroBanner from "./HeroBanner";
import cityscape1 from '../assets/images/backgrounds/sunset.jpg';
import cityscape2 from '../assets/images/backgrounds/cityscape.jpg';
import cityscape3 from '../assets/images/backgrounds/blindjustice.jpg';
import { homeText } from '../translations/Home';

interface Slide {
    title: string;
    subtitle: string;
    image?: string;
  }

  const slides: Slide[] = homeText.en.slides.map((slide, index) => {
    switch (index) {
      case 0:
        return {...slide, image: cityscape1};
      case 1:
        return {...slide, image: cityscape2};
      case 2:
        return {...slide, image: cityscape3};
      default:
        return slide;
    }
  });
  
const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [currentSlide]);

  return (
    <div className="home">
      <div className="home__banner">
        {slides.map((slide, index) => (
          <HeroBanner 
            title={slide.title} 
            subtitle={slide.subtitle} 
            image={slide.image} 
            index={currentSlide === index ? 0 : index + 1}
            key={index}
          />
        ))}
      </div>
      <div className="container">
        <h1>{homeText.en.welcomeTitle}</h1>
        <p>
          {homeText.en.welcomeDescription1}
        </p>
        <p>
          {homeText.en.welcomeDescription2}
        </p>
      </div>
    </div>
  );
};

export default Home;
