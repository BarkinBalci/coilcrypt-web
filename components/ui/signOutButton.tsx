"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

export function SignOutButton() {

  return (
    <button className="btn-ghost text-lg text-error" onClick={() => signOut()}>
    Sign out
  </button>
  );
}