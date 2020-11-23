import React from 'react';

// A simple component which returns the markup for a gallery container
function Gallery({ children }) {
  return (
    <div className="gallery">
      {children}
    </div>
  );
}

export default Gallery;