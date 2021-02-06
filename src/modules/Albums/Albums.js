import React from "react";
import { albumsMock } from "../../mocks";
import { AlbumList, NewSongForm } from "./components";
import { incrementVote } from './helpers';
import "./Albums.css";

class Albums extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      albums: albumsMock
    };
  }

  handleOnVote = (id) => {
    const { albums } = this.state;
    this.setState({ albums: incrementVote(id, albums) });
  }

  render() {
    const { albums } = this.state;
    return (
      <div>
        <AlbumList list={albums} onVote={this.handleOnVote} />
        <NewSongForm />
      </div>
    );
  }
}

export default Albums;
