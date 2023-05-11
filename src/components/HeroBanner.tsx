import * as React from "react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="hero-banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeroBanner;
