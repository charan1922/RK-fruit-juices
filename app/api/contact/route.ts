import { NextResponse } from "next/server";
import db from "@/lib/db";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 200) : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  const message =
    typeof body?.message === "string" ? body.message.trim().slice(0, 2000) : "";

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 }
    );
  }

  db.prepare("INSERT INTO contacts (name, phone, message) VALUES (?, ?, ?)").run(
    name,
    phone,
    message || null
  );

  return NextResponse.json({ ok: true });
}
