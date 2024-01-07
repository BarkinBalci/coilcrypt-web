import * as React from "react";
import { Icons } from "@/app/icons";

interface FavoriteToggleProps {
  item: any; // Change 'credential' to a more generic 'item'
  itemType: "Credential" | "Note"; // Add this line
  triggerUpdate: () => void;
}

async function favoriteItem(itemId: String, itemType: "Credential" | "Note") {
  const response = await fetch(`/api/vault/favorite${itemType}`, {
    // Use the itemType in the URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const message = await response.json();
  console.log(message);
}

export function FavoriteToggle({
  item,
  itemType, 
  triggerUpdate,
}: FavoriteToggleProps) {
 const [isChecked, setIsChecked] = React.useState(item.favorite);

  React.useEffect(() => {
    setIsChecked(item.favorite);
  }, [item.favorite]);

  const handleFavoriteChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await favoriteItem(item.id, itemType);
    setIsChecked(!isChecked);
    triggerUpdate();
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
