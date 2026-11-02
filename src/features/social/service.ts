export async function followUser(followerId: string, targetId: string) {
  return { followerId, targetId, following: true };
}
export async function unfollowUser(followerId: string, targetId: string) {
  return { followerId, targetId, following: false };
}
export async function getFriendActivity(userId: string) {
  return [] as { userId: string; trackId: string; at: string }[];
}
