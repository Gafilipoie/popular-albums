import React from "react";
import { albumsMock } from "../../mocks";
import { AlbumList, NewSongForm } from "./components";
import { initialFormState } from "./constants";
import {
  incrementVote,
  createAlbum,
  deleteAlbum,
  buildErrorState,
  checkHasErrors
} from "./helpers";
import "./Albums.css";

class Albums extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      albums: albumsMock,
      form: initialFormState,
      errors: {}
    };
  }

  handleOnVote = id => {
    const { albums } = this.state;
    this.setState({ albums: incrementVote(id, albums) });
  };

  handleOnDelete = id => {
    const { albums } = this.state;
    this.setState({ albums: deleteAlbum(id, albums) });
  };

  handeOnChange = (type, event) => {
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [type]: event.target.value
      }
    }));
  };

  validateForm = () => {
    const { form } = this.state;
    const errors = buildErrorState(form);
    const hasErrors = checkHasErrors(errors);
    if (!hasErrors) {
      this.addAlbum();
    }
    this.setState({ errors });
  };

  addAlbum = () => {
    const { albums, form } = this.state;
    this.setState({
      albums: [...albums, createAlbum(form, albums)]
    });
  };

  render() {
    const { albums, form, errors } = this.state;
    return (
      <div className="styledAlbums">
        <div className="container">
          <h1 className="title">Popular Metal Albums</h1>
          <AlbumList
            list={albums}
            onVote={this.handleOnVote}
            onDelete={this.handleOnDelete}
          />
          <NewSongForm
            form={form}
            errors={errors}
            handeOnChange={this.handeOnChange}
            handleOnSubmit={this.validateForm}
          />
        </div>
      </div>
    );
  }
}

export default Albums;
