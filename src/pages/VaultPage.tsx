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

import { AddCard } from "../components/AddCard";
import { AddIdentity } from "../components/AddIdentity";
import { AddLogin } from "../components/AddLogin";
import { AddNote } from "../components/AddNote";
import { IntroText } from "../components/IntroText";
import { ItemList } from "../components/ItemList";
import { useItemManager } from "../hooks/useItemManager";
import { SetStateAction, useState } from "react"; // Import useState

/**
 * Displays the list of items as well as buttons for performing
 * sync-related operations.
 */
export function VaultPage() {
  const { logins, notes, cards, identities, addLogin, addNote, addCard, addIdentity, toggleFavorite, deleteItem } =
    useItemManager();

  // Add search term state
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredLogins = logins.filtered("name CONTAINS[c] $0", searchTerm);
  const filteredNotes = notes.filtered("name CONTAINS[c] $0", searchTerm);
  const filteredCards = cards.filtered("name CONTAINS[c] $0", searchTerm);
  const filteredIdentities = identities.filtered("name CONTAINS[c] $0", searchTerm);

  return (
    <div className="">
      <div className="flex flex-row mx-auto w-full max-w-5xl px-4 pt-8 ">
        <div className="join w-full ">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input input-bordered join-item w-full"
          />
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-primary join-item">
              Add
            </button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <AddLogin onSubmit={addLogin} />
              <AddNote onSubmit={addNote} />
              <AddIdentity onSubmit={addIdentity} />
              <AddCard onSubmit={addCard} />
            </ul>
          </div>
        </div>
      </div>
      {logins.length === 0 ? (
        <IntroText />
      ) : (
        <ItemList
          logins={filteredLogins} // Use filtered results
          notes={filteredNotes} // Use filtered results
          cards={filteredCards} // Use filtered results
          identities={filteredIdentities} // Use filtered results
          onToggleFavorite={toggleFavorite}
          onDeleteItem={deleteItem}
        />
      )}
    </div>
  );
}
