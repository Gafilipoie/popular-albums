import React from 'react';
import UpVote from '../upVote';

const Album = ({ albumName, brandName, releaseYear, submittedBy }) => (
  <div className="styledAlbum">
    <div className="albumCoverUrl">
      <img src="" alt="" />
    </div>
    <div className="details">
      <UpVote votes={1} onClick={() => console.log('You voted!')} />
      <p>{albumName}</p>
      <p>{brandName}, {releaseYear}</p>
      <p>Submitted by: {submittedBy}</p>
    </div>
  </div>
);

export default Album;
