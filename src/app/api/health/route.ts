import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";

export async function GET() {
  try {
    getEnv();
    return NextResponse.json({ status: "ok", service: "wavelength" });
  } catch {
    return NextResponse.json({ status: "error" }, { status: 503 });
  }
}
