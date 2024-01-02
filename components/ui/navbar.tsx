import * as React from "react";
import { useSession, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { SignOutButton } from "@/components/ui/signOutButton";
import {ThemeToggle } from "@/components/ui/themeToggle";
export async function Navbar() {
  
  const session = await getServerSession(authConfig)

  return (
    <div className="bg-base-200 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-30"
            >
              {session && (
                <li>
                  <a href="/vault">Vault</a>
                </li>
              )}
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-2xl">
            CoilCrypt
          </a>
          <ul className="menu menu-horizontal  hidden lg:flex px-1">
            {session && (
              <li>
                <a href="/vault">Vault</a>
              </li>
            )}
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle/>
          {session ? (
          <SignOutButton/>
          ) : (
            <a className="btn btn-ghost" href="/api/auth/signin">
              Sign in
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
