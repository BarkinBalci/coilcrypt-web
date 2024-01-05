"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "@/app/icons";
import { AddCredentialModal } from "./ui/addCredential";

interface Vault {
  notes: Note[];
  credentials: Credential[];
}

interface Note {
  id: number;
  name: string;
  content: string;
  creationDate: string;
  revisionDate: string;
}

interface Credential {
  id: number;
  name: string;
  url: string;
  username: string;
  password: string;
  creationDate: string;
  revisionDate: string;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

async function deleteCredential(credentialId: String) {
  const response = await fetch('/api/vault/deleteCredential', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ credentialId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const message = await response.json();
  console.log(message);
}

function VaultComponent() {
  const [vault, setVault] = useState<Vault | null>(null);
  const [showPassword, setShowPassword] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/vault/getVault")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setVault(data.vault))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  if (!vault) {
    return <div>Loading...</div>;
  }

  const handleShowPassword = (credentialId: number) => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword.includes(credentialId)
        ? prevShowPassword.filter((id) => id !== credentialId)
        : [...prevShowPassword, credentialId]
    );
  };

  return (
    <div className="flex-col flex items-center space-y-6 mx-auto pb-64 pt-4 max-w-5xl px-4">
      <AddCredentialModal />
      <h2>Notes:</h2>
      {vault.notes.map((note) => (
        <div
          key={note.id}
          id={note.id.toString()}
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <h3>{note.name}</h3>
          </div>
          <div className="collapse-content">
            <textarea
              className="textarea textarea-bordered w-full"
              value={note.content}
              readOnly
            ></textarea>
            <div className="flex items-center justify-end space-x-2 pt-6">
              <button className="btn btn-warning">
                <Icons.edit />
              </button>
              <button className="btn btn-error">
                <Icons.trash />
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2>Credentials:</h2>
      {vault.credentials.map((credential) => (
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
            <input
              type="text"
              className="input input-bordered w-full  "
              value={credential.username}
              readOnly
            />
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <div className="join flex">
              <input
                type={
                  showPassword.includes(credential.id) ? "text" : "password"
                }
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
            <input
              type="text"
              className="input input-bordered w-full  "
              value={credential.url}
              readOnly
            />
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
      ))}
    </div>
  );
}

export default VaultComponent;
