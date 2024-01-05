//vault

import { getServerSession } from "next-auth";
import { prisma } from '@/lib/prisma'
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authConfig);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return NextResponse.json("User email not found", { status: 404 });
  }

  const vault = await prisma.vault.findFirst({
    where: {
      user: {
        email: userEmail,
      },
    },
    include: {
      notes: true,
      credentials: true,
    },
  });
  
  if (!vault) {
    const vault = await prisma.vault.create({
      data: {
        user: {
          connect: {
            email: userEmail,
          },
        },
      },
    });
    return NextResponse.json({ vault });
  }

  return NextResponse.json({ vault });
}
