import React from 'react';
import { Album, Button, Input, Select } from '../../../../components';

const AlbumList = () => (
  <div>
    <Album
      albumName="albumName"
      brandName="brandName"
      releaseYear="releaseYear"
      submittedBy="submittedBy"
    />
    <Button>Click Me</Button>
    <Input />
    <Select placeholder="placeholder" />
  </div>
);

export default AlbumList;
