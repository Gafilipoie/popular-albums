export const getMaxIdValue = albums =>
  albums.reduce((value, { id }) => (id > value ? id : value), 0);

export const incrementVote = (id, albums) =>
  albums.reduce((acc, album) => {
    if (album.id === id) {
      acc.push({ ...album, votes: album.votes + 1 });
      return acc;
    }
    acc.push(album);
    return acc;
  }, []);

export const createAlbum = (form, albums) => ({
  id: getMaxIdValue(albums) + 1,
  votes: 1,
  albumName: form.albumName,
  brandName: form.brandName,
  releaseYear: form.releaseYear,
  albumCoverUrl: form.albumCoverUrl || 'http://via.placeholder.com/100',
  moreInfoUrl: form.moreInfoUrl,
  submittedBy: form.submittedBy
});

export const deleteAlbum = (id, albums) =>
  albums.reduce((acc, album) => {
    if (album.id === id) return acc;
    acc.push(album);
    return acc;
  }, []);

export const buildErrorState = form => ({
  albumName: form.albumName ? "" : "Album Name is required!",
  brandName: form.brandName ? "" : "Brand Name is required!",
  releaseYear: form.releaseYear ? "" : "Release Year is required!",
  moreInfoUrl: form.moreInfoUrl ? "" : "More Info URL is required!",
  submittedBy: form.submittedBy ? "" : "Submitted by is required!"
})

export const checkHasErrors = errors =>
  Object.keys(errors).some(key => errors[key]);
