"use client";

import React, { useState } from "react";
import { Icons } from "@/app/icons";

export function VaultCreateHero() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center flex-col max-w-xl">
          <div>
            <h1 className="text-3xl font-bold">Create your Vault</h1>
            <p className="py-6">Please note your vault is only as strong as your password.</p>
          </div>
          <div className="label">
            <span className="label-text">Master-password:</span>
          </div>
          <div className="join w-full">
            <input type={showPassword ? "text" : "password"} className="input input-bordered w-full join-item" required />
            <button onClick={() => setShowPassword(!showPassword)} className="btn btn-secondary">
              {showPassword ? <Icons.hidePassword /> : <Icons.showPassword />}
            </button>
          </div>
          <div className="label">
            <span className="label-text">Confim Master-password:</span>
          </div>
          <input type={showPassword ? "text" : "password"} className="input input-bordered w-full join-item" required />
          <p className="text-left text-sm">
            The master password is the password you use to access your vault. It is very important that you do not forget your master password. There is no way
            to recover the password in the event you forget it.
          </p>
          <button className="btn btn-accent">Create Vault</button>
        </div>
      </div>
    </div>
  );
}