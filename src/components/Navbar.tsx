import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
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
