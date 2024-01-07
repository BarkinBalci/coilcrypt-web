// favoriteNote

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
            notes: true,
        },
    });

    if (!vault) {
        return NextResponse.json({ message: "Vault not found", action: "createVault" }, { status: 404 });
    }

    const { itemId } = await request.json();

    // Check if the note belongs to the user's vault
    const note = vault.notes.find(cred => cred.id === itemId);

    if (!note) {
        return NextResponse.json("Note not found in user's vault", { status: 404 });
    }

    const updatedNote = await prisma.note.update({
        where: {
            id: itemId,
        },
        data: {
            favorite: !note.favorite,
        },
    });

    return NextResponse.json("Successfully updated note", { status: 200 });
};