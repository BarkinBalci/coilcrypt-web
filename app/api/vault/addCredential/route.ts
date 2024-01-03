//addCredential

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

const updatedVault = await prisma.vault.update({
    where: {
        id: vault.id,
    },
    data: {
        credentials: {
            create: {
                name: "Github Credential",
                username: "barkin.balci@gmail.com",
                password: "Hello World!",
                url: "https://github.com",
            },
        },
    },
    include: {
        credentials: true,
    },
});

return NextResponse.json(updatedVault, { status: 200 });
};
