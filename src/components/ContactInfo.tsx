import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactInfo: React.FC = () => {
    return (
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
          <a href="https://www.google.com/maps/search/?api=1&query=1911+Guadalupe,+San+Antonio,+TX+78207" target="_blank" rel="noreferrer">
            1911 Guadalupe, San Antonio, TX 78207
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="icon" /> 
          <a href="tel:2102310112">
            210 231 0112
          </a>
        </p>
      </div>
    );
  };
  
  export default ContactInfo;
  