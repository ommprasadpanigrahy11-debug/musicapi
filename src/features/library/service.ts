export async function createPlaylist(ownerId: string, title: string) {
  return { id: "pl_" + ownerId, ownerId, title, tracks: [] as string[] };
}
export async function addTrack(playlistId: string, trackId: string, position: number) {
  return { playlistId, trackId, position };
}
export async function reorderTracks(playlistId: string, from: number, to: number) {
  return { playlistId, from, to };
}
export async function toggleLike(userId: string, trackId: string) {
  return { userId, trackId, liked: true };
}
