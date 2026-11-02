import { describe, it, expect } from "vitest";
import { passwordPolicy } from "@/lib/auth/password";

describe("password policy", () => {
  it("rejects weak", () => {
    expect(passwordPolicy("short")).toBe(false);
  });
  it("accepts strong", () => {
    expect(passwordPolicy("Str0ng!Passw0rdX")).toBe(true);
  });
});
