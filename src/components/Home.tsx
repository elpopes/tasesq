import React from 'react';
import HeroBanner from "./HeroBanner";



const Home: React.FC = () => {
  return (
    <div className='container'>
      <div className="home">
        <HeroBanner title="Welcome to Our Law Firm" subtitle="Providing top-quality legal services for over 40 years" />
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
      </div>
  );
};

export default Home;
