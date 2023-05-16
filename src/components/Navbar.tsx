import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from './logo.svg';

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
    <nav>
          <Logo className="App-logo" />
      <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'X' : '☰'}</div>
        <ul ref={node} className={isOpen ? 'open' : ''}>
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

