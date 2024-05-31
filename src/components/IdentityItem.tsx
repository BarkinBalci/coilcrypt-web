import { Toaster } from "react-hot-toast";
import { Icons } from "../icons";
import { useRef, useState } from "react";
import { showToast } from "./toast";
import { Identity } from "../models/Identity"; // Assuming you have an Identity model
import FavIcon from "./FavIcon";

type IdentityItemProps = {
  identity: Identity;
  onDelete: (identity: Identity) => void;
};

function copyToClipboard(text: string | undefined) {
  if (text) navigator.clipboard.writeText(text);
  showToast({
    message: "Copied to Clipboard!",
    toastId: "copyClipboard",
    type: "success",
  });
}

export function IdentityItem({ identity, onDelete }: IdentityItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogState, setDialogState] = useState<"view" | "edit" | "delete" | null>(null);

  const [formData, setFormData] = useState({
    name: identity.name,
    firstName: identity.firstName,
    middleName: identity.middleName,
    lastName: identity.lastName,
    dateOfBirth: identity.dateOfBirth,
    identityNumber: identity.identityNumber,
    email: identity.email,
    phone: identity.phone,
  });

  const handleOpenDialog = (state: "view" | "edit" | "delete") => {
    setDialogState(state);
  };

  return (
    <div className="collapse collapse-arrow bg-base-200 hover:bg-neutral">
      <div className="flex flex-row items-center px-4" onClick={() => handleOpenDialog("view")}>
        <FavIcon type="identity" />
        <div className="py-2 pl-4 flex-grow">
          <label className="flex-grow cursor-pointer flex text-md">{identity.name}</label>
          <label className="flex-grow cursor-pointer flex text-sm text-opacity-50 text-secondary">
            {[identity.firstName, identity.middleName, identity.lastName].join(" ")}
          </label>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id={identity._id.toHexString()}
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
                      <span className="font-bold text-lg"> {identity.name} </span>
                      identity? This action cannot be undone.
                    </p>
                    <div className="modal-action">
                      <button className="btn btn-error" onClick={() => onDelete(identity)}>
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
                    <h3 className="font-bold text-lg">Edit Identity</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="label">
                          <span className="label-text">Name:</span>
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={identity.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">First Name:</span>
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={identity.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Middle Name:</span>
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={identity.middleName}
                          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Last Name:</span>
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={identity.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Date of Birth:</span>
                        </div>
                        <input
                          type="date"
                          className="input input-bordered w-full"
                          defaultValue={identity.dateOfBirth}
                          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Identity Number:</span>
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={identity.identityNumber}
                          onChange={(e) => setFormData({ ...formData, identityNumber: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Email:</span>
                        </div>
                        <input
                          type="email"
                          className="input input-bordered w-full"
                          defaultValue={identity.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <div className="label">
                          <span className="label-text">Phone:</span>
                        </div>
                        <input
                          type="tel"
                          className="input input-bordered w-full"
                          defaultValue={identity.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
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
                    <h3 className="font-bold text-lg">{identity.name}</h3>
                    <div className="label">
                      <span className="label-text">First Name:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.firstName}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Middle Name:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.middleName}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Last Name:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.lastName}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Date of Birth:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.dateOfBirth}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Identity Number:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.identityNumber}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Email:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.email}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Phone:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={identity.phone}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
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
                        {new Date(identity.updatedAt).toLocaleString("en-GB", {
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
                        {new Date(identity.createdAt).toLocaleString("en-GB", {
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
