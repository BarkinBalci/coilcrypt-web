"use client";

import React, { useState } from "react";

export function VaultUnlockHero() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center flex-col">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Enter your master password</h1>
            <p className="py-6">
              Please note if you forget your password, you will not be able to
              access your vault.
            </p>
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Master password"
              className="input input-bordered w-72"
              required
            />
            
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-secondary"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="btn btn-primary">Unlock Vault</button>
        </div>
      </div>
    </div>
  );
}