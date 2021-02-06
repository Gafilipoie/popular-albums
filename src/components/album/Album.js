import React from 'react';
import { usersMock } from '../../mocks';
import UpVote from '../upVote';
import './Album.css';

const Album = ({ song }) => {
  const { albumName, brandName, releaseYear, albumCoverUrl, submittedBy } = song;
  return (
  <div className="styledAlbum">
    <div className="albumCoverUrl">
      <img src={albumCoverUrl} alt="" />
    </div>
    <div className="details">
      <UpVote votes={1} onClick={() => console.log('You voted!')} />
      <div className="details-info">
        <div className="albumName">{albumName}</div>
        <div className="brandName">{brandName}, {releaseYear}</div>
      </div>
      <div className="details-by">
        <span>Submitted by:</span>
        <img src={usersMock[submittedBy].avatar} alt="" />
      </div>
    </div>
  </div>
)};

export default Album;
