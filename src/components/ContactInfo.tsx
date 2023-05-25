import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactInfoText } from '../translations/ContactInfo';

interface ContactInfoProps {
    className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
    return (
        <div className={`contact-info ${className}`}>
            <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
                <a href={contactInfoText.en.addressLink} target="_blank" rel="noreferrer">
                    {contactInfoText.en.address}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} className="icon" /> 
                <a href={contactInfoText.en.phoneLink}>
                    {contactInfoText.en.phone}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
                <a href={contactInfoText.en.emailLink}>
                    {contactInfoText.en.email}
                </a>
            </p>
        </div>
    );
};

export default ContactInfo;

