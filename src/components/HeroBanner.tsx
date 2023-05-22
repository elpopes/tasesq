import * as React from "react";

interface HeroBannerProps {
    title: string;
    subtitle: string;
    image: string;
  }
  
  const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, image }) => {
    return (
      <div 
        className="hero-banner"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  };

export default HeroBanner;

