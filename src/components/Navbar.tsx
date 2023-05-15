import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav>
        <div onClick={toggleMenu}>{isOpen ? 'X' : '☰'}</div>
        <ul className={isOpen && isMobile ? 'open' : ''}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/immigration">Immigration</a>
          </li>
          <li>
            <a href="/employment-law">Employment Law</a>
          </li>
          <li>
            <a href="/accounting">Accounting</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
