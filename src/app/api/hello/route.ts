import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to Buttersea™ Next.js API",
    status: "online",
    timestamp: new Date().toISOString(),
  });
}
