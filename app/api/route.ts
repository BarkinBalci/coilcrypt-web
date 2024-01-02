import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const session = await getServerSession(authConfig);
    console.log('GET API', session);
    return NextResponse.json(session);
}