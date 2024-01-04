import { useState } from "react";
import { Icons } from "@/app/icons";
import { PasswordGenerator } from "./passwordGenerator";

export function AddCredentialModal() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

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
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>;
    }
    <div role="alert" className="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Your purchase has been confirmed!</span>
    </div>;
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          )?.showModal()
        }
      >
        Add Credential
      </button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Add Credential</h3>
          <p className="py-4">
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
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <button className="btn btn-accent" onClick={handleSave}>Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
