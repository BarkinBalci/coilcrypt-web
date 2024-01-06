import React, { useEffect, useState } from "react";
import { Icons } from "@/app/icons";


interface NoteItemProps {
  note: any;
}

export function NoteItem({note}: NoteItemProps) {

    return(
        <div
        key={note.id}
        id={note.id.toString()}
        className="collapse collapse-arrow bg-base-200"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h3>{note.name}</h3>
        </div>
        <div className="collapse-content">
          <textarea
            className="textarea textarea-bordered w-full"
            value={note.content}
            rows={6}
            readOnly
          ></textarea>
          <div className="flex items-center justify-end space-x-2 pt-6">
            <button className="btn btn-warning">
              <Icons.edit />
            </button>
            <button className="btn btn-error">
              <Icons.trash />
            </button>
          </div>
        </div>
      </div>)
}