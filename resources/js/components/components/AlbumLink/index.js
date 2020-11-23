import React from 'react';
import {Link} from 'react-router-dom';

// A component which returns the markup for an album link
function AlbumLink({to, children}) {
  return (
    <Link to={to} className="album-link">
      <div>
        <span>{children}</span>
      </div>
    </Link>
  );
}

export default AlbumLink;