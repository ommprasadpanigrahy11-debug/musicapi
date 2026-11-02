"use client";
export async function downloadTrackEncrypted(trackId: string, data: ArrayBuffer) {
  const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
  const exported = await crypto.subtle.exportKey("raw", key);
  localStorage.setItem(`dl:${trackId}:key`, btoa(String.fromCharCode(...new Uint8Array(exported))));
  localStorage.setItem(`dl:${trackId}:iv`, btoa(String.fromCharCode(...iv)));
  localStorage.setItem(`dl:${trackId}:ct`, btoa(String.fromCharCode(...new Uint8Array(ct))));
  return true;
}
export async function readTrackEncrypted(trackId: string): Promise<ArrayBuffer | null> {
  const k = localStorage.getItem(`dl:${trackId}:key`);
  const ivb = localStorage.getItem(`dl:${trackId}:iv`);
  const ctb = localStorage.getItem(`dl:${trackId}:ct`);
  if (!k || !ivb || !ctb) return null;
  const key = await crypto.subtle.importKey("raw", Uint8Array.from(atob(k), (c) => c.charCodeAt(0)), "AES-GCM", false, ["decrypt"]);
  const iv = Uint8Array.from(atob(ivb), (c) => c.charCodeAt(0));
  const ct = Uint8Array.from(atob(ctb), (c) => c.charCodeAt(0));
  return crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
}
