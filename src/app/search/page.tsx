"use client";
import { useState } from "react";

export default function SearchPage() {
  const [q, setQ] = useState("");
  return (
    <main className="p-6">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search songs..."
        className="w-full border rounded p-2"
        aria-label="Search"
      />
    </main>
  );
}
