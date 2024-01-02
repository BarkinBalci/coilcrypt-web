import { getServerSession } from "next-auth";
import { PrismaClient } from '@prisma/client'
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authConfig);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return NextResponse.json("User email not found", { status: 404 });
  }
  
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  
  if (!user) {
    return NextResponse.json("User not found", { status: 404 });
  }

  const vault = await prisma.vault.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!vault) {
    return NextResponse.json({ message: "Vault not found", action: "createVault" }, { status: 404 });
  }

  return NextResponse.json({ vault });
}
