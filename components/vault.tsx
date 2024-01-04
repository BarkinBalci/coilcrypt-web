"use client";

import React, { useEffect, useState } from "react";

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
    <div className="flex-col flex items-center space-y-6 mx-6 pb-64 pt-4 ">
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
              placeholder="Bio"
              value={note.content}
              readOnly
            ></textarea>
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
              placeholder="Type here"
              className="input input-bordered w-full  "
              value={credential.username}
              readOnly
            />
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <div className="join">
            <input
              type={showPassword.includes(credential.id) ? "text" : "password"}
              placeholder="Type here"
              className="input input-bordered w-full   disabled join-item"
              value={credential.password}
              readOnly
            />
            <button
              className="btn btn-neutral ml-2 join-item"
              onClick={() => handleShowPassword(credential.id)}
            >
              {showPassword.includes(credential.id) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
            <button
                className="btn btn-neutral ml-2 join-item"
                onClick={() => copyToClipboard(credential.password)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6" // Update the class to make the icon larger and centered
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                </svg>
            </button>
            </div>
            <div className="label">
              <span className="label-text">URL:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  "
              value={credential.url}
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default VaultComponent;
