import { useState } from "react";
import { Icons } from "../icons";

type AddIdentityProps = {
  onSubmit: (
    name: string,
    firstName: string,
    middleName: string,
    lastName: string,
    dateOfBirth: string,
    identityNumber: string,
    email: string,
    phone: string,
  ) => void;
};

export function AddIdentity({ onSubmit }: AddIdentityProps) {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    onSubmit(name, firstName, middleName, lastName, dateOfBirth, identityNumber, email, phone);
    setName("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDateOfBirth("");
    setIdentityNumber("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <li onClick={() => (document.getElementById("AddIdentityModal") as HTMLDialogElement)?.showModal()}>
        <a>Identity</a>
      </li>
      <dialog id="AddIdentityModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Add Identity</h3>
          <div className="py-4 grid grid-cols-2 gap-4">
            <div>
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
            </div>
            <div>
              <div className="label">
                <span className="label-text">First Name:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={64}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Middle Name:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                maxLength={64}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Last Name:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                maxLength={64}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Date of Birth:</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Identity Number:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={identityNumber}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Phone:</span>
              </div>
              <input
                type="tel"
                className="input input-bordered w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
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
