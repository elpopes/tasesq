import React from 'react';

const Map: React.FC = () => {
  return (
    <div>
      <h2>Location Map</h2>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=1920+Guadalupe,+San+Antonio,+TX+78207&zoom=15&size=600x450&markers=1920+Guadalupe,+San+Antonio,+TX+78207`}
        alt="Office Location"
      />
    </div>
  );
};

export default Map;
