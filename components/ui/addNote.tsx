"use client";

import { useState } from "react";
import { Icons } from "@/app/icons";

export function AddNoteModal() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");


  const resetValues = () => {
    setName("");
    setContent("");
  };

  const handleSave = async () => {
    const response = await fetch("/api/vault/addNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });

    if (!response.ok) {
    //Error response
    }
    //Success response
    resetValues();
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          )?.showModal()
        }
      >
        <div className="flex flex-row items-center">
          <span className="hidden lg:inline-block mr-2 whitespace-nowrap">Add Note</span>
          <Icons.edit />
        </div>
      </button>
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Add Note</h3>
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
            <div className="label pt-6">
              <span className="label-text">Content:</span>
            </div>
            <textarea
                className="textarea textarea-bordered w-full"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
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
