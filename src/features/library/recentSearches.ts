export interface RecentSearch { query: string; at: string; }
export function addRecentSearch(list: RecentSearch[], query: string): RecentSearch[] {
  const filtered = list.filter((r) => r.query !== query);
  return [{ query, at: new Date().toISOString() }, ...filtered].slice(0, 10);
}
export function clearRecentSearches(): RecentSearch[] {
  return [];
}
