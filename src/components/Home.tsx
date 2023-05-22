import React, { useState, useEffect } from 'react';
import HeroBanner from "./HeroBanner";
import cityscape1 from '../assets/images/backgrounds/sunset.jpg';
import cityscape2 from '../assets/images/backgrounds/cityscape.jpg';
import cityscape3 from '../assets/images/backgrounds/blindjustice.jpg';

const slides = [
    {
      title: "Welcome to Our Law Firm",
      subtitle: "Providing top-quality legal services for over 40 years",
      image: cityscape1,
    },
    {
      title: "Experienced Legal Team",
      subtitle: "A team of professionals you can trust",
      image: cityscape2,
    },
    {
      title: "Contact Us Today",
      subtitle: "We're here to help with your legal needs",
      image: cityscape3,
    },
  ];

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
    <HeroBanner 
      title={slides[currentSlide].title} 
      subtitle={slides[currentSlide].subtitle} 
      image={slides[currentSlide].image} 
    />
      <h1>Welcome to TASESQ</h1>
      <p>
        We are a San Antonio-based federal law firm with over 40 years of
        experience. Our seasoned team of legal professionals is dedicated to
        providing the highest quality legal services to our clients. We
        specialize in a broad range of federal legal matters and are committed
        to delivering results for our clients.
      </p>
      <p>
        Contact us today to learn more about how we can assist you with your
        legal needs.
      </p>
    </div>
  );
};

export default Home;
