import { NextResponse } from "next/server";
import { tokens } from "@/entities/token/mock";

export async function GET() {
  await new Promise(r => setTimeout(r, 350));
  return NextResponse.json(tokens);
}
