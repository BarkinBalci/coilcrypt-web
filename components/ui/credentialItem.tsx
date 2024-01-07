import React, { useEffect, useRef, useState } from "react";
import { Icons } from "@/app/icons";
import { FavoriteToggle } from "./favoriteToggle";
import { PasswordGenerator } from "./passwordGenerator";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function openUrl(url: string) {
  window.open(url, "_blank");
}
interface CredentialItemProps {
  credential: any;
  triggerUpdate: () => void;
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

async function updateCredential(
  name: String,
  url: String,
  username: String,
  password: String,
  credentialId: String
) {
  const response = await fetch("/api/vault/updateCredential", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, url, username, password, credentialId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const message = await response.json();
  console.log(message);
}

export function CredentialItem({
  credential,
  triggerUpdate,
}: CredentialItemProps) {
  const [showPassword, setShowPassword] = useState<number[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(credential.name);
  const [url, setUrl] = useState(credential.url);
  const [username, setUsername] = useState(credential.username);
  const [password, setPassword] = useState(credential.password);

  const handleShowPassword = (credentialId: number) => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword.includes(credentialId)
        ? prevShowPassword.filter((id) => id !== credentialId)
        : [...prevShowPassword, credentialId]
    );
  };
  const handleDeleteCredential = async (credentialId: String) => {
    await deleteCredential(credentialId);
    triggerUpdate();
  };

  const handleUpdateCredential = async (
    name: String,
    url: String,
    username: String,
    password: String,
    credentialId: String
  ) => {
    await updateCredential(name, url, username, password, credentialId);
    setIsEditing(false);
    triggerUpdate();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div
      key={credential.id}
      id={credential.id.toString()}
      className="collapse collapse-arrow bg-base-200"
    >
      <div className="flex flex-row items-center py-2 px-2">
        <FavoriteToggle
          item={credential}
          itemType="Credential"
          triggerUpdate={triggerUpdate}
        />
        <div
          className="flex-grow cursor-pointer"
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.showModal();
            }
          }}
        >
          <label className="pl-2 text-xl flex-grow cursor-pointer">
            {credential.name}
          </label>
        </div>
        <div className="tooltip tooltip-left" data-tip="Open Link">
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => openUrl(credential.url)}
          >
            <Icons.link />
          </button>
        </div>
        <div className="tooltip tooltip-left" data-tip="Copy username">
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => copyToClipboard(credential.username)}
          >
            <Icons.user />
          </button>
        </div>
        <div className="tooltip tooltip-left" data-tip="Copy password">
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => copyToClipboard(credential.password)}
          >
            <Icons.key />
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id={credential.id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {isEditing ? (
            <div>
              <h3 className="font-bold text-lg">Edit Credential</h3>
              <div className="label">
                <span className="label-text">Name:</span>
              </div>
              <div className="flex">
                <input
                  key="name"
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={credential.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="label">
                <span className="label-text">Username:</span>
              </div>
              <div className=" flex">
                <input
                  key="username"
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={credential.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <PasswordGenerator
                onPasswordChange={setPassword}
                defaultPassword={credential.password}
              />
              <div className="label">
                <span className="label-text">URL:</span>
              </div>
              <div>
                <input
                  key="url"
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={credential.url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between pt-8">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handleUpdateCredential(
                        name,
                        url,
                        username,
                        password,
                        credential.id.toString()
                      )
                    }
                  >
                    Save <Icons.save />
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      dialogRef?.current?.close();
                      setIsEditing(false);
                    }}
                  >
                    Discard <Icons.discard />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-lg">{credential.name}</h3>
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
              <div className="flex items-center justify-between pt-8">
                <div>
                  <button
                    className="btn btn-warning"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit <Icons.edit />
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-error"
                    onClick={() =>
                      handleDeleteCredential(credential.id.toString())
                    }
                  >
                    Delete <Icons.trash />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsEditing(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
}
