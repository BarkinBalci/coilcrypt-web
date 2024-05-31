import { useState } from "react";
import { Icons } from "../icons";
import { PasswordGenerator } from "./passwordGenerator";

type AddLoginProps = {
  onSubmit: (name: string, username: string, password: string, url: string) => void;
};

export function AddLogin({ onSubmit }: AddLoginProps) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    onSubmit(name, username, password, url);
    setName("");
    setUsername("");
    setPassword("");
    setUrl("");
  };

  return (
    <div>
      <li onClick={() => (document.getElementById("AddLoginModal") as HTMLDialogElement)?.showModal()}>
        <a>Login</a>
      </li>
      <dialog id="AddLoginModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
              maxLength={64}
            />
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={64}
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
              maxLength={128}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <button className="btn btn-accent" onClick={handleSubmit}>
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
