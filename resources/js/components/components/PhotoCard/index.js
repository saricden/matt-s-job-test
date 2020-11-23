import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// An element to display an individual photo, that when clicked will open the photo modal
function PhotoCard({url, name, date, description, featured, onClick}) {
  return (
    <div className="photo-card" onClick={onClick}>
      {/* Utilize a linear-gradient to darken the photo and make the text stand out */}
      <header style={{backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)),
        url(/${url})
      `}}>
        {name}
      </header>
      <p>{description}</p>
      <footer>
        {/* Show a heart icon if the photo is featured, or an empty <i /> if not */}
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