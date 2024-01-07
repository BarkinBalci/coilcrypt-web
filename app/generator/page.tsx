"use client"
import { Metadata } from "next";
import * as React from "react";
import { PasswordGenerator } from "@/components/ui/passwordGenerator";

export default function GeneratorPage() {
  return (
    <div className="px-4 py-8 max-w-2xl mx-auto">
      <PasswordGenerator onPasswordChange={() => {}} />
    </div>
  );
}
