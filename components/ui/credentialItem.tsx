import React, { useEffect, useState } from "react";
import { Icons } from "@/app/icons";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function openUrl(url: string) {
  window.open(url, "_blank");
}

async function deleteCredential(credentialId: String) {
  const response = await fetch("/api/vault/deleteCredential", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credentialId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const message = await response.json();
  console.log(message);
}
interface CredentialItemProps {
  credential: any;
}

export function CredentialItem({ credential }: CredentialItemProps) {
  const [showPassword, setShowPassword] = useState<number[]>([]);

  const handleShowPassword = (credentialId: number) => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword.includes(credentialId)
        ? prevShowPassword.filter((id) => id !== credentialId)
        : [...prevShowPassword, credentialId]
    );
  };
  return (
    <div
      key={credential.id}
      id={credential.id.toString()}
      className="collapse collapse-arrow bg-base-200"
    >
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <h3>{credential.name}</h3>
      </div>
      <div className="collapse-content">
        <div className="label">
          <span className="label-text">Username:</span>
        </div>
        <div className="join flex">
          <input
            type="text"
            className="input input-bordered w-full join-item"
            value={credential.username}
            readOnly
          />
          <button
            className="btn btn-neutral join-item"
            onClick={() => copyToClipboard(credential.username)}
          >
            <Icons.clipboard />
          </button>
        </div>
        <div className="label">
          <span className="label-text">Password:</span>
        </div>
        <div className="join flex">
          <input
            type={showPassword.includes(credential.id) ? "text" : "password"}
            className="input input-bordered w-full   disabled join-item"
            value={credential.password}
            readOnly
          />
          <button
            className="btn btn-neutral join-item"
            onClick={() => handleShowPassword(credential.id)}
          >
            {showPassword.includes(credential.id) ? (
              <Icons.showPassword />
            ) : (
              <Icons.hidePassword />
            )}
          </button>
          <button
            className="btn btn-neutral join-item"
            onClick={() => copyToClipboard(credential.password)}
          >
            <Icons.clipboard />
          </button>
        </div>
        <div className="label">
          <span className="label-text">URL:</span>
        </div>
        <div className="join flex">
          <input
            type="text"
            className="input input-bordered w-full join-item "
            value={credential.url}
            readOnly
          />
          <button
            className="btn btn-neutral join-item"
            onClick={() => openUrl(credential.url)}
          >
            <Icons.link />
          </button>
        </div>
        <div className="flex items-center justify-end space-x-2 pt-6">
          <button className="btn btn-warning">
            <Icons.edit />
          </button>
          <button
            className="btn btn-error"
            onClick={() => deleteCredential(credential.id.toString())}
          >
            <Icons.trash />
          </button>
        </div>
      </div>
    </div>
  );
}
