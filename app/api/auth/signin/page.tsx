"use client";
import * as React from "react";

import { UserAuthForm } from "@/components/ui/authForm"


export default function AuthenticationPage() {

  return (
    <div className="h-screen flex flex-col">
      <UserAuthForm/>
    </div>
  )
}