import React, { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLUListElement>(null); // Create a ref for the ul

  const handleClick = (e: any) => {
    // Check if the click was outside the menu
    if (node.current && !node.current.contains(e.target)) {
      // If it was outside the menu, close the menu
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <nav>
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

