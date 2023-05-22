import React, { useState, useEffect } from 'react';
import HeroBanner from "./HeroBanner";
import cityscape1 from '../assets/images/backgrounds/sunset.jpg';
import cityscape2 from '../assets/images/backgrounds/cityscape.jpg';
import cityscape3 from '../assets/images/backgrounds/pillars.jpg';

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
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [currentSlide]);

  return (
    <div className="home">
      <HeroBanner 
        title={slides[currentSlide].title} 
        subtitle={slides[currentSlide].subtitle} 
        image={slides[currentSlide].image} 
      />
      {/* ... rest of the code ... */}
    </div>
  );
};

export default Home;
