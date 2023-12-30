"use client";
import * as React from "react";

import { UserAuthForm } from "@/components/ui/authForm"


export default function AuthenticationPage() {

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <UserAuthForm/>
    </div>
  )
}