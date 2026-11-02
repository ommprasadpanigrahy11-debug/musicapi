import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-4 flex flex-col gap-2">
      <Link href="/" className="font-bold text-xl mb-4">Wavelength</Link>
      <Link href="/search" className="hover:text-green-400">Search</Link>
      <Link href="/" className="hover:text-green-400">Home</Link>
      <Link href="/settings" className="hover:text-green-400">Settings</Link>
    </aside>
  );
}
