import React, { memo } from "react";
import { usersMock } from "../../../../mocks";
import { Button, Input, Select } from "../../../../components";
import "./NewSongForm.css";

const NewSongForm = ({ form, errors, handeOnChange, handleOnSubmit }) => (
  <div className="styledNewSongForm">
    <h2 className="form-title">Add New</h2>
    <div>
      <Input
        className="form-input"
        value={form.albumName}
        placeholder="Album Name"
        error={errors.albumName}
        onChange={event => handeOnChange("albumName", event)}
        />
      <Input
        className="form-input"
        value={form.brandName}
        placeholder="Brand Name"
        error={errors.brandName}
        onChange={event => handeOnChange("brandName", event)}
        />
      <Input
        className="form-input"
        value={form.releaseYear}
        placeholder="Release Year"
        error={errors.releaseYear}
        onChange={event => handeOnChange("releaseYear", event)}
        />
      <Input
        className="form-input"
        value={form.albumCoverUrl}
        placeholder="Album Cover URL"
        error={errors.albumCoverUrl}
        onChange={event => handeOnChange("albumCoverUrl", event)}
        />
      <Input
        className="form-input"
        value={form.moreInfoUrl}
        placeholder="More Info URL"
        error={errors.moreInfoUrl}
        onChange={event => handeOnChange("moreInfoUrl", event)}
        />
      <Select
        className="form-input"
        value={form.submittedBy}
        options={usersMock}
        placeholder="Submitted by"
        error={errors.submittedBy}
        onChange={event => handeOnChange("submittedBy", event)}
        />
      <Button action={handleOnSubmit}>Submit</Button>
    </div>
  </div>
);

export default memo(NewSongForm);
