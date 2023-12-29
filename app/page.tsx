import * as React from "react";
import { signIn } from "next-auth/react";
import { Navbar } from "@/components/ui/navbar"


export default function Home() {
  return (
    <Navbar/>
  );
}
