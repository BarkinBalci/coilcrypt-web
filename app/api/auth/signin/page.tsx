import * as React from "react";
import { Metadata } from "next";

import { UserAuthForm } from "@/components/ui/authForm"

export const metadata: Metadata = {
  title: "Sign In",
  description: "",
};

export default function AuthenticationPage() {

  return (
    <div className="h-screen flex flex-col">
      <UserAuthForm/>
    </div>
  )
}