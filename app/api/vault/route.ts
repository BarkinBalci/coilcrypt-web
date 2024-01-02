import { getServerSession } from "next-auth";
import { PrismaClient } from '@prisma/client'
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authConfig);
  const userEmail = session?.user?.email;

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail ?? undefined,
    },
  });
  
  if (!user) {
    return NextResponse.json("User not found", { status: 404 });
  }

  const vault = await prisma.vault.findMany({
    where: {
      userId: user.id,
    },
  });

  if (!vault) {
    return NextResponse.json("Vault not found", { status: 404 });
  }

  return NextResponse.json({ vault });
}
