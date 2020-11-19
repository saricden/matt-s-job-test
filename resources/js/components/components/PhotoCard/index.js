import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PhotoCard({url, name, date, description, featured}) {
  return (
    <div className="photo-card">
      <header style={{backgroundImage: `url(${url})`}}>
        {name}
      </header>
      <p>{description}</p>
      <footer>
        {
          featured
          ? <FontAwesomeIcon icon={faHeart} />
          : <i />
        }
        <time>{date}</time>
      </footer>
    </div>
  );
}

export default PhotoCard;