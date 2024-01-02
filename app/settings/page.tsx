import { Metadata } from "next";
import * as React from "react";
import { SignOutButton } from "@/components/ui/signOutButton";

export const metadata: Metadata = {
  title: "Settings",
  description: "",
};

export default function HelpPage() {
  return <div>Settings Page
    <SignOutButton />
  </div>;
}
