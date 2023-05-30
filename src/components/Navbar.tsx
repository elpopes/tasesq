import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from './logo.svg';
import ContactInfo from "./ContactInfo";
import { Link } from 'react-router-dom'; 
import { navbarText } from '../translations/Navbar';
import LanguageButton from "./LanguageButton";

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
          {navbarText.en.links.map((link, index) => (
            <li key={index}><Link to={link.path}>{link.text}</Link></li>
          ))}
        </ul>
        <LanguageButton />
      </nav>
    </>
  );
}

export default Navbar;
