import React, { useEffect, useState, useRef } from "react";
import { Icons } from "@/app/icons";
import { FavoriteToggle } from "./favoriteToggle";

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

  const message = await response.json();
  console.log(message);
}

export function NoteItem({ note, triggerUpdate }: NoteItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDeleteNote = async (noteId: String) => {
    await deleteNote(noteId);
    triggerUpdate();
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
              <button className="btn btn-warning">
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
