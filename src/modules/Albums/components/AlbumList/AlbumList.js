import React, { memo } from "react";
import { Album, Button, Input, Select } from "../../../../components";

const AlbumList = ({ list }) => {
  return (
    <div>
      {list.length && list.map(song => <Album key={song.id} song={song} />)}
      <Button>Click Me</Button>
      <Input />
      <Select placeholder="placeholder" />
    </div>
  );
};

export default memo(AlbumList);
