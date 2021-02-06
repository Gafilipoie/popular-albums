export const incrementVote = (id, albums) =>
  albums.reduce((acc, album) => {
    if (album.id === id) {
      acc.push({ ...album, votes: album.votes + 1 });
      return acc;
    }
    acc.push(album);
    return acc;
  }, []);
