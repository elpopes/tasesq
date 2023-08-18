import React from 'react';
import { mapText } from '../translations/Map';
import { LanguageContext, LanguageContextProps } from '../LanguageContext';

const NyMap: React.FC = () => {
    const { language } = React.useContext<LanguageContextProps>(LanguageContext);
    const t = mapText[language];
  
    return (
      <div style={{ width: '600px' }}>
        <h2 style={{ marginBottom: '20px' }}>{t.nyLocationTitle}</h2> {/* Changed to nyLocationTitle */}
        <iframe
          title="New York Office Location"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=110+E+23rd+St+9th+Floor+Room+904,+New+York,+NY+10010&output=embed"
        ></iframe>
      </div>
    );
  };
  
  export default NyMap;
