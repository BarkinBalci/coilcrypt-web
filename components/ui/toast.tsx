import React from "react";
import toast from "react-hot-toast";

interface SuccessToastProps {
    message: string;
    toastId: string;
}

export function showSuccessToast(message: string, toastId: string) {
  toast.custom(<SuccessToast message={message} toastId={toastId} />, {
    id: toastId,
  });
}

function SuccessToast({ message, toastId }: SuccessToastProps) {
  return (
    <div
      role="alert"
      className="alert alert-success flex flex-row max-w-sm justify-between"
    >
      <div className="flex flex-row space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{message}</span>
      </div>
      <button
        className="btn btn-sm btn-ghost"
        onClick={() => toast.dismiss(toastId)}
      >
        Dismiss
      </button>
    </div>
  );
};