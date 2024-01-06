"use client";

import { useState } from "react";
import { Icons } from "@/app/icons";
import { PasswordGenerator } from "./passwordGenerator";

export function AddCredentialModal(props: { triggerUpdate: () => void }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const resetValues = () => {
    setName("");
    setUsername("");
    setPassword("");
    setUrl("");
  };

  const handleSave = async () => {
    const response = await fetch("/api/vault/addCredential", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        url,
      }),
    });

    if (!response.ok) {
      //Error response
    } else {
      //Success response
      resetValues();
      props.triggerUpdate();
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          )?.showModal()
        }
      >
        <div className="flex flex-row items-center">
          <span className="hidden lg:inline-block mr-2 whitespace-nowrap">
            Add Credential
          </span>
          <Icons.addUser />
        </div>
      </button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Add Credential</h3>
          <div className="py-4">
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <PasswordGenerator onPasswordChange={setPassword} />
            <div className="label">
              <span className="label-text">URL:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <button className="btn btn-accent" onClick={handleSave}>
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
