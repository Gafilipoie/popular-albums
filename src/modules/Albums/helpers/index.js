export const incrementVote = (id, albums) =>
  albums.reduce((acc, album) => {
    if (album.id === id) {
      acc.push({ ...album, votes: album.votes + 1 });
      return acc;
    }
    acc.push(album);
    return acc;
  }, []);

export const deleteAlbum = (id, albums) =>
  albums.reduce((acc, album) => {
    if (album.id === id) return acc;
    acc.push(album);
    return acc;
  }, []);

export const getMaxIdValue = albums =>
  albums.reduce((value, { id }) => (id > value ? id : value), 0);

export const checkHasErrors = errors =>
  Object.keys(errors).some(key => errors[key]);
