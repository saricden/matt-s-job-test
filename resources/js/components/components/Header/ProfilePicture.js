import React from 'react';

function ProfilePicture({ src }) {
  return (
    <div className="profile-picture">
      <div style={{
        backgroundImage: `url(/${src})`
      }} />
    </div>
  );
}

export default ProfilePicture;