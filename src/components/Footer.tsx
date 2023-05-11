import * as React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Our Law Firm, San Antonio, TX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
