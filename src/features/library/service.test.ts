import { describe, it, expect } from "vitest";
import { createPlaylist, toggleLike } from "./service";

describe("library service", () => {
  it("creates playlist", async () => {
    const p = await createPlaylist("u1", "My Mix");
    expect(p.title).toBe("My Mix");
  });
  it("toggles like", async () => {
    const r = await toggleLike("u1", "t1");
    expect(r.liked).toBe(true);
  });
});
