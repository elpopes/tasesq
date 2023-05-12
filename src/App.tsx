import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Immigration from './components/Immigration';
// import EmploymentLaw from './components/EmploymentLaw';
// import Accounting from './components/Accounting';
// import FAQs from './components/FAQs';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>    
          <Route path="/" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          {/* <Route path="/employment-law" component={EmploymentLaw} />
          <Route path="/accounting" component={Accounting} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} /> */}
        </Routes>        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
