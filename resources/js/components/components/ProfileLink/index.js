import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePicture from '../Header/ProfilePicture';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

// A component which renders a stylized link to the photographer's profile
function ProfileLink({name, bio, id, profilePicture}) {
  return (
    <Link
      className="profile-link"
      to={`/${id}`}
    >
      <ProfilePicture src={profilePicture} />
      <div>
        <header>{name}</header>
        <p>{bio}</p>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}

export default ProfileLink;