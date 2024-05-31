import { Toaster } from "react-hot-toast";
import { Icons } from "../icons";
import { PasswordGenerator } from "./passwordGenerator";
import { useRef, useState } from "react";
import { showToast } from "./toast";
import { Note } from "../models/Note";
import FavIcon from "./FavIcon";

type NoteItemProps = {
  note: Note;
  onDelete: (note: Note) => void;
};

function copyToClipboard(text: string | undefined) {
  if (text) navigator.clipboard.writeText(text);
  showToast({
    message: "Copied to Clipboard!",
    toastId: "copyClipboard",
    type: "success",
  });
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogState, setDialogState] = useState<"view" | "edit" | "delete" | null>(null);

  const [formData, setFormData] = useState({
    name: note.name,
    content: note.content,
  });

  const handleOpenDialog = (state: "view" | "edit" | "delete") => {
    setDialogState(state);
  };

  return (
    <div className="collapse collapse-arrow bg-base-200 hover:bg-neutral">
      <div className="flex flex-row items-center px-4" onClick={() => handleOpenDialog("view")}>
        <FavIcon type="note" />
        <div className="py-4 pl-4 flex-grow">
          <label className="flex-grow cursor-pointer flex text-md">{note.name}</label>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id={note._id.toHexString()}
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
                      <span className="font-bold text-lg"> {note.name} </span>
                      note? This action cannot be undone.
                    </p>
                    <div className="modal-action">
                      <button className="btn btn-error" onClick={() => onDelete(note)}>
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
                    <h3 className="font-bold text-lg">Edit Note</h3>
                    <div className="label">
                      <span className="label-text">Name:</span>
                    </div>
                    <div className="flex">
                      <input key="name" type="text" className="input input-bordered w-full" defaultValue={note.name} />
                    </div>
                    <div className="label">
                      <span className="label-text">Content:</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered w-full"
                      defaultValue={note.content}
                      rows={6}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    />

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
                    <h3 className="font-bold text-lg">{note.name}</h3>
                    <div className="label">
                      <span className="label-text">Content:</span>
                    </div>
                    <div>
                      <textarea className="textarea textarea-bordered w-full" value={note.content} rows={6} readOnly />
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
                        {new Date(note.updatedAt).toLocaleString("en-GB", {
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
                        {new Date(note.createdAt).toLocaleString("en-GB", {
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
