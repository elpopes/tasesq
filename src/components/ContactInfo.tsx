import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactInfoText } from '../translations/ContactInfo';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

interface ContactInfoProps {
    className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
    const { language } = React.useContext<LanguageContextProps>(LanguageContext);

    return (
        <div className={`contact-info ${className}`}>
            <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
                <a href={contactInfoText[language].addressLink} target="_blank" rel="noreferrer">
                    {contactInfoText[language].address}
                </a>
            </p>
            <p> {/* New York Address */}
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
                <a href={contactInfoText[language].nyAddressLink} target="_blank" rel="noreferrer">
                    {contactInfoText[language].nyAddress}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} className="icon" /> 
                <a href={contactInfoText[language].phoneLink}>
                    {contactInfoText[language].phone}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
                <a href={contactInfoText[language].emailLink}>
                    {contactInfoText[language].email}
                </a>
            </p>
        </div>
    );
};


export default ContactInfo;

