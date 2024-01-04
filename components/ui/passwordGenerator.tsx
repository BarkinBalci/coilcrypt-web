"use client"
import { useState } from "react";
import { Icons } from "@/app/icons";

interface PasswordGeneratorProps {
    onPasswordChange: (newPassword: string) => void;
  }

  export function PasswordGenerator({ onPasswordChange }: PasswordGeneratorProps) {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    onPasswordChange(event.target.value); // Call the prop function with the new password
  };

  return (
    <div className="py-4 space-y-4">
      <div>
        <div className="label">
          <span className="label-text">Password:</span>
        </div>
        <div className="join flex">
        <input
            type="text"
            className="input input-bordered w-full join-item"
            value={password}
            onChange={handlePasswordChange}
        />
          <button className="btn btn-neutral join-item">
            <Icons.refresh />
          </button>
        </div>
      </div>
      <div>
        <input
          type="range"
          min="8"
          max="36"
          defaultValue="24"
          className="range"
          step="1"
        />
        <div className="w-full flex justify-between text-xs px-2 pt-2">
          <span>8</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
          <span>28</span>
          <span>32</span>
          <span>36</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">A-Z</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">a-z</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">0-9</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">!@#$%^&*</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}
