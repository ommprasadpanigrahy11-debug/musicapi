export async function getWrapped(userId: string, year: number) {
  return {
    userId,
    year,
    minutesListened: 0,
    topTracks: [] as string[],
    topArtists: [] as string[],
    topGenres: [] as string[],
  };
}
