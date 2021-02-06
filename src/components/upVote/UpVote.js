import React from 'react';
import './UpVote.css';

const UpVote = ({ votes, onClick }) => (
  <div className="styledUpVote">
    <i className="icon-caret-up" onClick={onClick}></i>
    <span className="votes">{votes}</span>
  </div>
);

export default UpVote;
