import React, { useEffect, useState, useRef } from "react";
import { Icons } from "@/app/icons";
import { FavoriteToggle } from "./favoriteToggle";
import { Toaster } from "react-hot-toast";
import { showSuccessToast } from "./toast";
interface NoteItemProps {
  note: any;
  triggerUpdate: () => void;
}

async function deleteNote(noteId: String) {
  const response = await fetch("/api/vault/deleteNote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ noteId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  showSuccessToast("Deleted the Note!", "deletedNote");

  const message = await response.json();
  console.log(message);
}

async function updateNote(name: String, content: String, noteId: String) {
  const response = await fetch("/api/vault/updateNote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, content, noteId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  showSuccessToast("Updated the Note!", "updatedNote");
  const message = await response.json();
  console.log(message);
}

export function NoteItem({ note, triggerUpdate }: NoteItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(note.name);
  const [content, setContent] = useState(note.content);

  const handleDeleteNote = async (noteId: String) => {
    await deleteNote(noteId);
    triggerUpdate();
  };

  const handleUpdateNote = async (
    name: String,
    content: String,
    noteId: String
  ) => {
    await updateNote(name, content, noteId);
    setIsEditing(false);
    triggerUpdate();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <div
      key={note.id}
      id={note.id.toString()}
      className="collapse collapse-arrow bg-base-200"
    >
      <div className="flex flex-row items-center py-2 px-2">
        <FavoriteToggle
          item={note}
          itemType="Note"
          triggerUpdate={triggerUpdate}
        />
        <label
          className="pl-2 cursor-pointer text-xl flex-grow"
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.showModal();
            }
          }}
        >
          {note.name}
        </label>
      </div>
      <dialog
        ref={dialogRef}
        id={note.id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {isEditing ? (
            <div>
              <h3 className="font-bold text-lg">Edit Note</h3>
              <div className="label">
                <span className="label-text">Name:</span>
              </div>
              <div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={note.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="label">
                <span className="label-text">Content:</span>
              </div>
              <div>
                <textarea
                  className="textarea textarea-bordered w-full"
                  defaultValue={note.content}
                  rows={6}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between pt-8">
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdateNote(name, content, note.id)}
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
              <h3 className="font-bold text-lg">{note.name}</h3>
              <div className="label">
                <span className="label-text">Content:</span>
              </div>
              <div>
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={note.content}
                  rows={6}
                  readOnly
                />
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
                    onClick={() => handleDeleteNote(note.id.toString())}
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
        <Toaster />
      </dialog>
    </div>
  );
}
