import { Toaster } from "react-hot-toast";
import { Icons } from "../icons";
import { useRef, useState } from "react";
import { showToast } from "./toast";
import { Card } from "../models/Card";
import FavIcon from "./FavIcon";

type CardItemProps = {
  card: Card;
  onDelete: (card: Card) => void;
};

function copyToClipboard(text: string | undefined) {
  if (text) navigator.clipboard.writeText(text);
  showToast({
    message: "Copied to Clipboard!",
    toastId: "copyClipboard",
    type: "success",
  });
}

export function CardItem({ card, onDelete}: CardItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogState, setDialogState] = useState<"view" | "edit" | "delete" | null>(null);

  const [formData, setFormData] = useState({
    name: card.name,
    ownerName: card.ownerName,
    number: card.number,
    expirationDate: card.expirationDate,
    cvv: card.cvv
  });

  const handleOpenDialog = (state: "view" | "edit" | "delete") => {
    setDialogState(state);
  };

  return (
    <div className="collapse collapse-arrow bg-base-200 hover:bg-neutral">
      <div className="flex flex-row items-center px-4" onClick={() => handleOpenDialog("view")}>
        <FavIcon type="card" />
        <div className="py-2 pl-4 flex-grow">
          <label className="flex-grow cursor-pointer flex text-md">{card.name}</label>
          <label className="flex-grow cursor-pointer flex text-sm text-opacity-50 text-secondary">
            {(card.number ?? "").replace(/(\d{4} \d{2})\d{2} \d{4} (\d{4})/, "$1** **** $2")}
          </label>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id={card._id.toHexString()}
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
                      <span className="font-bold text-lg"> {card.name} </span>
                      identity? This action cannot be undone.
                    </p>
                    <div className="modal-action">
                      <button className="btn btn-error" onClick={() => onDelete(card)}>
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
                    <h3 className="font-bold text-lg">Edit Card</h3>
                    <div>
                      <div className="label">
                        <span className="label-text">Name:</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={card.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <div className="label">
                        <span className="label-text">Owner Name:</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={card.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      />
                    </div>
                    <div>
                      <div className="label">
                        <span className="label-text">Number:</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={card.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      />
                    </div>
                    <div>
                      <div className="label">
                        <span className="label-text">Expiration Date:</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={card.expirationDate}
                        onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <div className="label">
                        <span className="label-text">CVV:</span>
                      </div>
                      <input
                        type="date"
                        className="input input-bordered w-full"
                        defaultValue={card.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
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
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <div className="label">
                      <span className="label-text">Owner Name:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={card.ownerName}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Number:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={card.number}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">Expiration Date:</span>
                    </div>
                    <div className="join flex">
                      <input
                        type="text"
                        className="input input-bordered w-full join-item"
                        value={card.expirationDate}
                        readOnly
                      />
                      <button className="btn btn-secondary join-item">
                        <Icons.Clipboard />
                      </button>
                    </div>
                    <div className="label">
                      <span className="label-text">CVV:</span>
                    </div>
                    <div className="join flex">
                      <input type="text" className="input input-bordered w-full join-item" value={card.cvv} readOnly />
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
                        {new Date(card.updatedAt).toLocaleString("en-GB", {
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
                        {new Date(card.createdAt).toLocaleString("en-GB", {
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
