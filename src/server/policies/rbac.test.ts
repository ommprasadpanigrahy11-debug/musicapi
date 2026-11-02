import { describe, it, expect } from "vitest";
import { hasRole, isPremium, isAdmin } from "@/server/policies/rbac";

describe("rbac", () => {
  it("denies by default", () => {
    expect(hasRole("USER", "ADMIN")).toBe(false);
    expect(hasRole("USER", "PREMIUM")).toBe(false);
  });
  it("premium includes premium", () => {
    expect(isPremium("PREMIUM")).toBe(true);
    expect(isPremium("USER")).toBe(false);
  });
  it("admin is admin", () => {
    expect(isAdmin("ADMIN")).toBe(true);
  });
});
