import * as React from "react";
import { Icons } from "@/app/icons";

interface FavoriteToggleProps {
  credential: any;
  triggerUpdate: () => void; // Add this line
}

async function favoriteCredential(credentialId: String) {
  const response = await fetch("/api/vault/favoriteCredential", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credentialId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const message = await response.json();
  console.log(message);
}

export function FavoriteToggle({
  credential,
  triggerUpdate, // Add this line
}: FavoriteToggleProps) {
  const [isChecked, setIsChecked] = React.useState(credential.favorite);

  React.useEffect(() => {
    setIsChecked(credential.favorite);
  }, [credential.favorite]);

  const handleFavoriteChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await favoriteCredential(credential.id);
    setIsChecked(!isChecked);
    triggerUpdate(); // Add this line
  };

  return (
    <div>
      <label className="swap btn btn-ghost">
        <input
          type="checkbox"
          className="favorite-controller"
          checked={isChecked}
          onChange={handleFavoriteChange}
        />

        {/* star outline icon */}
        <Icons.staroutline />

        {/* star icon */}
        <Icons.star />
      </label>
    </div>
  );
}
