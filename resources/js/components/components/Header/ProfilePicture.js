import React from 'react';

// Reusable profile picture component, returning simple markup
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