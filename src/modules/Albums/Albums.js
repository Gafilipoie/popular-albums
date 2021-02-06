import React from 'react';
import AlbumList from './components/AlbumList';
import NewSongForm from './components/NewSongForm';
import './Albums.css';

class Albums extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <AlbumList />
        <NewSongForm />
      </div>
    );
  }
};

export default Albums;
