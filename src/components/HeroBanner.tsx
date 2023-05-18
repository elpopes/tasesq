import * as React from "react";
import cityscape from '../assets/images/backgrounds/sunset.jpg';

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle }) => {
  return (
    <div 
      className="hero-banner"
      style={{ backgroundImage: `url(${cityscape})` }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeroBanner;

