import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';

// A component that takes in an optional photographer object, and an optional albumID, then renders a breadcrumb link trail
function Breadcrumb({photographer, albumID}) {
  return (
    <ul>
      <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
      {
        photographer
        ? <Fragment>
            <li><FontAwesomeIcon icon={faChevronRight} /></li>
            <li><Link to={`/${photographer.id}`}>{photographer.name}</Link></li>
          </Fragment>
        : null
      }
      {
        albumID
        ? <Fragment>
            <li><FontAwesomeIcon icon={faChevronRight} /></li>
            <li><Link to={`/${photographer.id}/${albumID}`}>Album #{albumID}</Link></li>
          </Fragment>
        : null
      }
    </ul>
  );
}

export default Breadcrumb;