"use client";
import * as React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { UserAuthForm } from "@/components/ui/authForm";

export default function AuthenticationPage() {
  const { data: session, status: loading } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push("/vault");
    }
  }, [session]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <UserAuthForm/>
    </div>
  );
}