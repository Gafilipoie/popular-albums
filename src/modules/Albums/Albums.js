import React from "react";
import { albumsMock } from "../../mocks";
import { AlbumList, NewSongForm } from "./components";
import "./Albums.css";

class Albums extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      albums: albumsMock
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <div>
        <AlbumList list={albums} />
        <NewSongForm />
      </div>
    );
  }
}

export default Albums;
