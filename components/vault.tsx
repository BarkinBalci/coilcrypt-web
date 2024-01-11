"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "@/app/icons";
import { AddCredentialModal } from "./ui/addCredential";
import { AddNoteModal } from "./ui/addNote";
import { CredentialItem } from "./ui/credentialItem";
import { NoteItem } from "./ui/noteItem";

interface Vault {
  notes: Note[];
  credentials: Credential[];
}
interface Note {
  id: number;
  name: string;
  content: string;
  favorite: boolean;
  creationDate: string;
  revisionDate: string;
}
interface Credential {
  id: number;
  name: string;
  url: string;
  favorite: boolean;
  username: string;
  password: string;
  creationDate: string;
  revisionDate: string;
}

function VaultComponent() {
  const [vault, setVault] = useState<Vault | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const triggerUpdate = () => setUpdateTrigger(!updateTrigger);

  useEffect(() => {
    fetch("/api/vault/getVault")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setVault(data.vault))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [updateTrigger]);

  if (!vault) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const sortedNotes = vault.notes
    ? vault.notes
        .filter((note) => note.name.toLowerCase().includes(searchTerm))
        .sort((a, b) => {
          if (a.favorite && !b.favorite) {
            return -1;
          } else if (!a.favorite && b.favorite) {
            return 1;
          } else {
            switch (sortOption) {
              case "A-Z":
                return a.name.localeCompare(b.name);
              case "Z-A":
                return b.name.localeCompare(a.name);
              default:
                return 0;
            }
          }
        })
    : [];

  const sortedCredentials = vault.credentials
    ? vault.credentials
        .filter((credential) =>
          credential.name.toLowerCase().includes(searchTerm)
        )
        .sort((a, b) => {
          if (a.favorite && !b.favorite) {
            return -1;
          } else if (!a.favorite && b.favorite) {
            return 1;
          } else {
            switch (sortOption) {
              case "A-Z":
                return a.name.localeCompare(b.name);
              case "Z-A":
                return b.name.localeCompare(a.name);
              default:
                return 0;
            }
          }
        })
    : [];

  return (
    <div className="min-h-screen h-full flex-col flex items-center mx-auto pb-64 pt-6 max-w-5xl px-4">
      <div className="flex flex-row space-x-2 mx-auto w-full">
        <div className="join w-full">
          <button className="btn btn-primary join-item">
            <Icons.search />
          </button>
          <input
            className="join-item input input-bordered input-primary w-full"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <select
            className="join-item select-primary select"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option selected>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>
        <AddCredentialModal triggerUpdate={triggerUpdate} />
        <AddNoteModal triggerUpdate={triggerUpdate} />
      </div>
      {sortedCredentials.length === 0 && sortedNotes.length === 0 ? (
        <div>
          <p>There are no search results.</p>
        </div>
      ) : vault.notes.length === 0 && vault.credentials.length === 0 ? (
        <>
          <div className="card lg:card-side bg-base-200 shadow-xl">
            <figure>
              <Icons.smallvault />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Welcome to your vault!</h2>
              <p>
                You can store all types of sensitive data here, transmit it
                securely to anyone, and do so much more. Get started by adding a
                credential or a note to your vault.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {sortedNotes.length > 0 && (
            <div className="label w-full pt-6">
              <span className="label-text">
                Notes:
              </span>
            </div>
          )}
          <div className="w-full space-y-4">
            {sortedNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                triggerUpdate={triggerUpdate}
              />
            ))}
          </div>

          {sortedCredentials.length > 0 && (
            <div className="label w-full pt-6">
              <span className="label-text">Credentials:</span>
            </div>
          )}
          <div className="w-full space-y-4">
            {sortedCredentials.map((credential) => (
              <CredentialItem
                key={credential.id}
                credential={credential}
                triggerUpdate={triggerUpdate}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VaultComponent;
