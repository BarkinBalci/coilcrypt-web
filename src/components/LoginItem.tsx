import { Toaster } from "react-hot-toast";
import { Icons } from "../icons";
import type { Login } from "../models/Login";
import { PasswordGenerator } from "./passwordGenerator";
import { useRef, useState } from "react";
import { showToast } from "./toast";
import FavIcon from "./FavIcon";

type LoginItemProps = {
  login: Login;
  onDelete: (login: Login) => void;
};

function copyToClipboard(text: string | undefined) {
  if (text) navigator.clipboard.writeText(text);
  showToast({
    message: "Copied to Clipboard!",
    toastId: "copyClipboard",
    type: "success",
  });
}

export function LoginItem({ login, onDelete }: LoginItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [dialogState, setDialogState] = useState<"view" | "edit" | "delete" | null>(null);



  const [formData, setFormData] = useState({
    name: login.name,
    url: login.url,
    username: login.username,
    password: login.password,
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOpenDialog = (state: "view" | "edit" | "delete") => {
    setDialogState(state);
  };

  return (
    <div className="collapse collapse-arrow bg-base-200 hover:bg-neutral">
      <div className="flex flex-row items-center px-4" onClick={() => handleOpenDialog("view")}>
        <FavIcon url={login.url} type="login" />
        <div className="py-2 pl-4 flex-grow">
          <label className="flex-grow cursor-pointer flex text-md">{login.name}</label>
          <label className="flex-grow cursor-pointer flex text-sm text-opacity-50 text-secondary">
            {login.username}
          </label>
        </div>
        <button className="btn btn-ghost tooltip" data-tip="Copy url" onClick={() => copyToClipboard(login.url)}>
          <Icons.Link />
        </button>
        <button
          className="btn btn-ghost tooltip"
          data-tip="Copy username"
          onClick={() => copyToClipboard(login.username)}
        >
          <Icons.User />
        </button>
        <button
          className="btn btn-ghost tooltip"
          data-tip="Copy password"
          onClick={() => copyToClipboard(login.password)}
        >
          <Icons.Key />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        id={login._id.toHexString()}
        className="modal modal-bottom sm:modal-middle"
        open={dialogState !== null}
      >
        <div className="modal-box">
          {(() => {
            switch (dialogState) {
              case "delete":
                return (
                  <div>
                    <h3 className="font-bold text-lg">Confirm deletion:</h3>
                    <p className="pt-4 text-md">
                      Are you sure you want to delete the
                      <span className="font-bold text-lg"> {login.name} </span>
                      credential? This action cannot be undone.
                    </p>
                    <div className="modal-action">
                      <button className="btn btn-error" onClick={() => onDelete(login)}>
                        Delete <Icons.Trash />
                      </button>
                      <button className="btn btn-secondary" onClick={() => setDialogState(null)}>
                        Cancel <Icons.Cancel />
                      </button>
                    </div>
                  </div>
                );
              case "edit":
                return (
                  <div>
                    <h3 className="font-bold text-lg">Edit Login</h3>
                    <div className="label">
                      <span className="label-text">Name:</span>
                    </div>
                    <div className="flex">
                      <input key="name" type="text" className="input input-bordered w-full" defaultValue={login.name} />
                    </div>
                    <div className="label">
                      <span className="label-text">Username:</span>
                    </div>
                    <input
                      key="username"
                      type="text"
                      className="input input-bordered w-full"
                      defaultValue={login.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <PasswordGenerator
                      onPasswordChange={(newPassword) => setFormData({ ...formData, password: newPassword })}
                      defaultPassword={formData.password}
                    />
                    <div className="label">
                      <span className="label-text">URL:</span>
                    </div>
                    <div>
                      <input
                        key="url"
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={login.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-8">
                      <div>
                        <button className="btn btn-success">
                          Save <Icons.Save />
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setDialogState("view");
                          }}
                        >
                          Discard <Icons.Discard />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              case "view":
                return (
                  <div>
                    <h3 className="font-bold text-lg">{login.name}</h3>
                    <div className="label">
                      <span className="label-text">Username:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={login.username}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>

                    <label className="label">
                      <span className="label-text">Password:</span>
                    </label>
                    <div className="join flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="input input-bordered w-full join-item"
                        value={login.password}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item" onClick={handleShowPassword}>
                        {showPassword ? <Icons.HidePassword /> : <Icons.ShowPassword />}
                      </button>
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>

                    <div className="label">
                      <span className="label-text">URL:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item "
                        value={login.url}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Link />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-8">
                      <div>
                        <button className="btn btn-warning" onClick={() => setDialogState("edit")}>
                          Edit <Icons.Edit />
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-error" onClick={() => setDialogState("delete")}>
                          Delete <Icons.Trash />
                        </button>
                      </div>
                    </div>
                    <div className="pt-5">
                      <p className="text-xs text-opacity-50 text-secondary">
                        Updated:{" "}
                        {new Date(login.updatedAt).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: false,
                        })}
                      </p>
                      <p className="text-xs text-opacity-50 text-secondary">
                        Created:{" "}
                        {new Date(login.createdAt).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: false,
                        })}
                      </p>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })()}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setDialogState(null)}>close</button>
        </form>
        <Toaster />
      </dialog>
    </div>
  );
}
