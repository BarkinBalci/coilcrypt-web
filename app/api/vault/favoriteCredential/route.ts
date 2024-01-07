// favoriteCredential

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
    include: {
      credentials: true,
    },
  });

  if (!vault) {
    return NextResponse.json({ message: "Vault not found", action: "createVault" }, { status: 404 });
  }

  const { itemId } = await request.json();

  // Check if the credential belongs to the user's vault
  const credential = vault.credentials.find(cred => cred.id === itemId);

  if (!credential) {
    return NextResponse.json("Credential not found in user's vault", { status: 404 });
  }

const updatedCredential = await prisma.credential.update({
    where: {
    id: itemId,
    },
    data: {
        favorite: !credential.favorite,
    },
});

  return NextResponse.json("Successfully updated credential", { status: 200 });
};