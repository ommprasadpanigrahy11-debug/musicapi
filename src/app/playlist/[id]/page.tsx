export default async function PlaylistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <main className="p-6"><h1 className="text-2xl font-bold">Playlist {id}</h1></main>;
}
