import React from 'react';
import Icon from '../icon';
import './UpVote.css';

const UpVote = ({ votes, onClick }) => (
  <div className="styledUpVote">
    <Icon className="icon-caret-up" onClick={onClick} />
    <span className="votes">{votes}</span>
  </div>
);

export default UpVote;
