import * as React from "react";
import { signIn } from "next-auth/react";
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Footer/>
    </div>
  );
}
