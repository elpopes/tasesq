import React, { useState, useEffect, useContext } from 'react';
import Helmet from 'react-helmet';
import HeroBanner from "./HeroBanner";
import cityscape1 from '../assets/images/backgrounds/sunset.jpg';
import cityscape2 from '../assets/images/backgrounds/cityscape.jpg';
import cityscape3 from '../assets/images/backgrounds/blindjustice.jpg';
import { homeText } from '../translations/Home';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

interface Slide {
    title: string;
    subtitle: string;
    image?: string;
}

const Home: React.FC = () => {
    const { language } = useContext<LanguageContextProps>(LanguageContext);
    const slides: Slide[] = homeText[language].slides.map((slide: Slide, index: number) => {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [currentSlide, slides.length]);

  return (
    <div className="home">
      <Helmet>
        <title>{homeText[language].pageTitle}</title>
        <meta name="description" content={homeText[language].pageDescription} />
      </Helmet>
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
        <h1>{homeText[language].welcomeTitle}</h1>
        <p>
          {homeText[language].welcomeDescription1}
        </p>
        <p>
          {homeText[language].welcomeDescription2}
        </p>
      </div>
    </div>
  );
};

export default Home;
