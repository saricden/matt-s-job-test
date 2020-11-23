import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PhotoCard({url, name, date, description, featured, onClick}) {
  return (
    <div className="photo-card" onClick={onClick}>
      <header style={{backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)),
        url(/${url})
      `}}>
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