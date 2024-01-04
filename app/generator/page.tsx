"use client"
import { Metadata } from "next";
import * as React from "react";
import { PasswordGenerator } from "@/components/ui/passwordGenerator";

export default function GeneratorPage() {
  return (
  <div>
    <PasswordGenerator onPasswordChange={() => {}} />
    </div>)
}
