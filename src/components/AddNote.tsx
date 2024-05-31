import { useState } from "react";
import { Icons } from "../icons";

type AddNoteProps = {
  onSubmit: (name: string, note: string) => void;
};



export function AddNote({ onSubmit }: AddNoteProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onSubmit(name, content);
    setName("");
    setContent("");
  };
  return (
    <div>
      <li onClick={() => (document.getElementById("AddNoteModal") as HTMLDialogElement)?.showModal()}>
        <a>Note</a>
      </li>
      <dialog id="AddNoteModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
              maxLength={64}
            />
            <div className="label">
              <span className="label-text">Content:</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              value={content}
              rows={6}
              onChange={(e) => setContent(e.target.value)}
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
