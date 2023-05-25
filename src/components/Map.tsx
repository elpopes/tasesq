import React from 'react';

const Map: React.FC = () => {
  return (
    <div style={{ width: '600px' }}>
      <h2 style={{ marginBottom: '20px' }}>Location Map</h2>
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
