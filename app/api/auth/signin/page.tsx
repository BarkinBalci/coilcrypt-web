"use client";
import * as React from "react";

import { UserAuthForm } from "@/components/ui/authForm"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export default function AuthenticationPage() {

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar/>
      <UserAuthForm/>
      <Footer/>
    </div>
  )
}