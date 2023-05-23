import * as React from "react";

interface HeroBannerProps {
    title: string;
    subtitle: string;
    image: string;
    index: number;
  }
  
  const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, image, index }) => {
    return (
      <div 
        className={`hero-banner slide-${index}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  };

export default HeroBanner;

