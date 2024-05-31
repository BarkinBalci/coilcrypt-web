////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { Icons } from "../icons";

type AddCardProps = {
  onSubmit: (name: string, ownerName: string, number: string, expirationDate: string, cvv: string) => void;
};

export function AddCard({ onSubmit }: AddCardProps) {
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [number, setNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleSubmit = () => {
    onSubmit(name, ownerName, number, expirationDate, cvv);
    setName("");
    setOwnerName("");
    setNumber("");
    setExpirationDate("");
    setCVV("");
  };

  return (
    <div>
      <li onClick={() => (document.getElementById("AddCardModal") as HTMLDialogElement)?.showModal()}>
        <a>Card</a>
      </li>
      <dialog id="AddCardModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Add Card</h3>
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
              <span className="label-text">Owner Name:</span>
            </div>
            <input
              className="input input-bordered w-full"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Number:</span>
            </div>
            <input className="input input-bordered w-full" value={number} onChange={(e) => setNumber(e.target.value)} />
            <div className="label">
              <span className="label-text">Expiration Date:</span>
            </div>
            <input
              className="input input-bordered w-full"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
            <div className="label">
              <span className="label-text">CVV:</span>
            </div>
            <input className="input input-bordered w-full" value={cvv} onChange={(e) => setCVV(e.target.value)} />
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
