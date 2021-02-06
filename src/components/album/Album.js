import React from 'react';
import { usersMock } from '../../mocks';
import Icon from '../icon';
import UpVote from '../upVote';
import './Album.css';

const Album = ({ song, onVote, onDelete }) => {
  const { id, votes, albumName, brandName, releaseYear, albumCoverUrl, submittedBy } = song;
  return (
  <div className="styledAlbum">
    <div className="albumCoverUrl">
      <img src={albumCoverUrl} alt="" />
    </div>
    <div className="details">
      <UpVote votes={votes} onClick={() => onVote(id)} />
      <div className="details-info">
        <div className="albumName">{albumName}</div>
        <div className="brandName">{brandName}, {releaseYear}</div>
      </div>
      <div className="details-by">
        <span>Submitted by:</span>
        <img src={usersMock[submittedBy].avatar} alt="" />
      </div>
    </div>
    <Icon className="icon-remove" onClick={() => onDelete(id)} />
  </div>
)};

export default Album;
