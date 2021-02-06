import React from "react";
import { albumsMock } from "../../mocks";
import { AlbumList, NewSongForm } from "./components";
import { incrementVote, getMaxIdValue, checkHasErrors } from "./helpers";
import "./Albums.css";

class Albums extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      albums: albumsMock,
      form: {
        albumName: "",
        brandName: "",
        releaseYear: "",
        albumCoverUrl: "",
        moreInfoUrl: "",
        submittedBy: ""
      },
      errors: {}
    };
  }

  handleOnVote = id => {
    const { albums } = this.state;
    this.setState({ albums: incrementVote(id, albums) });
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
    const errors = {
      albumName: form.albumName ? "" : "Album Name is required!",
      brandName: form.brandName ? "" : "Brand Name is required!",
      releaseYear: form.releaseYear ? "" : "Release Year is required!",
      moreInfoUrl: form.moreInfoUrl ? "" : "More Info URL is required!",
      submittedBy: form.submittedBy ? "" : "Submitted by is required!"
    };
    const hasErrors = checkHasErrors(errors);
    if (!hasErrors) {
      this.addAlbum();
    }
    this.setState({ errors });
  };

  addAlbum = () => {
    const { albums, form } = this.state;
    const newAlbum = {
      id: getMaxIdValue(albums) + 1,
      votes: 1,
      albumName: form.albumName,
      brandName: form.brandName,
      releaseYear: form.releaseYear,
      albumCoverUrl: form.albumCoverUrl,
      moreInfoUrl: form.moreInfoUrl,
      submittedBy: form.submittedBy
    };
    this.setState({ albums: [...albums, newAlbum] });
  };

  render() {
    const { albums, form, errors } = this.state;
    return (
      <div>
        <AlbumList list={albums} onVote={this.handleOnVote} />
        <NewSongForm
          form={form}
          errors={errors}
          handeOnChange={this.handeOnChange}
          handleOnSubmit={this.validateForm}
        />
      </div>
    );
  }
}

export default Albums;
