import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Immigration from './components/Immigration';
import EmploymentLaw from './components/EmploymentLaw';
import Accounting from './components/Accounting';
import FAQs from './components/FAQs';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router basename='/'>
      <div className="App">
        <Navbar />
        <Routes>    
          <Route path="/" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/employment-law" element={<EmploymentLaw />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
