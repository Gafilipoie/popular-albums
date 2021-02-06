import React, { memo } from "react";
import { Album } from "../../../../components";
import './AlbumList.css';

const AlbumList = ({ className, list, onVote, onDelete }) => {
  return (
    <div className="albumList">
      {list.length
        ? list.map(song => (
            <Album
              key={song.id}
              song={song}
              onVote={onVote}
              onDelete={onDelete}
            />
          ))
        : null}
    </div>
  );
};

export default memo(AlbumList);
