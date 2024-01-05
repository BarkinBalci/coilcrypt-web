//addCredential

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

  const { name, username, password, url } = await request.json();

  const updatedVault = await prisma.vault.update({
    where: {
        id: vault.id,
    },
    data: {
        credentials: {
            create: {
                name: name,
                username: username,
                password: password,
                url: url,
            },
        },
    },
  });

  return NextResponse.json("Successfully added credential", { status: 200 });
};