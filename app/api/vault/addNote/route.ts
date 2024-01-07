//addNote

import { getServerSession } from "next-auth";
import { prisma } from '@/lib/prisma'
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
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
  });

  if (!vault) {
    return NextResponse.json({ message: "Vault not found", action: "createVault" }, { status: 404 });
  }

  const { name, content} = await request.json();

  if (name.length > 64) {
    return NextResponse.json("Name exceeds the maximum limit", { status: 400 });
  }

  if (content.length > 3000) {
    return NextResponse.json("Content exceeds the maximum limit", { status: 400 });
  }

  const updatedVault = await prisma.vault.update({
    where: {
        id: vault.id,
    },
    data: {
        notes: {
            create: {
                name: name,
                content: content,
            },
        },
    },
  });

  return NextResponse.json("Successfully added note", { status: 200 });
};