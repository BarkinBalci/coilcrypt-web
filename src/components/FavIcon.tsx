import React, { useState } from "react";
import { Icons } from "../icons";

interface FavIconProps {
  url?: string;
  type: "login" | "note" | "card" | "identity";
}

const FavIcon: React.FC<FavIconProps> = ({ url, type }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  switch (type) {
    case "login":
      return imageError || !url ? (
        <Icons.User className="w-12" />
      ) : (
        <img
          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${url}`}
          alt="Favicon"
          onError={handleImageError}
          style={{ width: "24px", height: "24px" }}
        />
      );
    case "note":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            width={"24px"}
            height={"24px"}
          />
        </svg>
      );
    case "card":
      return (
        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" widths={"24px"} height={"24px"}>
          <g data-name="Layer 2">
            <g data-name="credit-card">
              <rect width="24" height="24" opacity="0" />

              <path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z" />

              <path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z" />

              <path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
            </g>
          </g>
        </svg>
      );
    case "identity":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"24px"}
          height={"24px"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      );
  }
};

export default FavIcon;
