import React, { memo } from "react";
import { Album } from "../../../../components";

const AlbumList = ({ list, onVote, onDelete }) => {
  return (
    <div>
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
