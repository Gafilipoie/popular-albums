import React from 'react';

const UpVote = ({ votes, onClick }) => (
  <div>
    <i className="icon-caret-up" onClick={onClick}></i>
    <span>{votes}</span>
  </div>
);

export default UpVote;
