import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from './logo.svg';
import ContactInfo from "./ContactInfo";
import { Link } from 'react-router-dom';  // import Link here

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLUListElement>(null); 

  const handleClick = (e: any) => {
    if (node.current && !node.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
<>
  <div className="contact-info-bar">
    <ContactInfo className="narrow-screen" />
  </div>
  <nav>
    <Logo className="App-logo" />
    <ContactInfo className="contact-info-nav wide-screen" />
    <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'X' : '☰'}</div>
    <ul ref={node} className={isOpen ? 'open' : ''}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/immigration">Immigration</Link></li>
      <li><Link to="/employment-law">Employment Law</Link></li>
      <li><Link to="/accounting">Accounting</Link></li>
      <li><Link to="/faqs">FAQs</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
  </>
  );
}

export default Navbar;
