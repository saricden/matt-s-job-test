import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons';

function Loader({msg}) {
  return (
    <div className="loader">
      <div>
        <FontAwesomeIcon icon={faSync} className="fa-2x fa-spin" />
        <span>{msg}</span>
      </div>
    </div>
  );
}

export default Loader;