import React from 'react';

function Bio({name, bio}) {
  return (
    <div className="bio">
      <h1>{name}</h1>
      <label>Bio</label>
      <p>{bio}</p>
    </div>
  );
}

export default Bio;