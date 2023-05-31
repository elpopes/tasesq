import React from 'react';
import { mapText } from '../translations/Map';
import { LanguageContext, LanguageContextProps } from '../LanguageContext'; 

const Map: React.FC = () => {
  const { language } = React.useContext<LanguageContextProps>(LanguageContext);
  const t = mapText[language];

  return (
    <div style={{ width: '600px' }}>
      <h2 style={{ marginBottom: '20px' }}>{t.locationTitle}</h2>
      <iframe
        title="Office Location"
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=1911+Guadalupe,+San+Antonio,+TX+78207&output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
