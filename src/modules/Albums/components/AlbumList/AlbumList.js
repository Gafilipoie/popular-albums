import React, { memo } from "react";
import { Album } from "../../../../components";

const AlbumList = ({ list, onVote }) => {
  return (
    <div>
      {list.length && list.map(song => <Album key={song.id} song={song} onVote={onVote} />)}
    </div>
  );
};

export default memo(AlbumList);
