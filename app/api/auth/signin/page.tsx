"use client";
import * as React from "react";

import { UserAuthForm } from "@/components/ui/authForm"
import { Navbar } from "@/components/ui/navbar"

export default function AuthenticationPage() {

  return (
    <div>
      <Navbar/>
      <UserAuthForm/>
    </div>
  )
}