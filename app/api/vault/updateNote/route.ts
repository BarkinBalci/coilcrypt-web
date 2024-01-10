// updateNote

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

    const {name, content, noteId } = await request.json();

    const note = vault.notes.find(not => not.id === noteId);

    if (!note) {
        return NextResponse.json("note not found in user's vault", { status: 404 });
    }

    const updatedNote = await prisma.note.update({
        where: {
            id: noteId,
        },
        data: {
            name,
            content,
            revisionDate: new Date().toISOString()
        }
    });

    return NextResponse.json("Successfully updated note", { status: 200 });
};