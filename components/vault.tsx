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
  creationDate: string;
  revisionDate: string;
}

interface Credential {
  id: number;
  name: string;
  url: string;
  username: string;
  password: string;
  creationDate: string;
  revisionDate: string;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

async function deleteCredential(credentialId: String) {
  const response = await fetch("/api/vault/deleteCredential", {
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

function VaultComponent() {
  const [vault, setVault] = useState<Vault | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");

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
  }, []);

  if (!vault) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const sortedNotes = vault.notes
    .filter((note) => note.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      switch (sortOption) {
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  const sortedCredentials = vault.credentials
    .filter((credential) => credential.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      switch (sortOption) {
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="flex-col flex items-center space-y-6 mx-auto pb-64 pt-6 max-w-5xl px-4">
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
        <AddCredentialModal />
        <AddNoteModal />
      </div>
      <h2>Notes:</h2>
      {sortedNotes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}

      <h2>Credentials:</h2>
      {sortedCredentials.map((credential, index) => (
        <CredentialItem key={index} credential={credential} />
      ))}
    </div>
  );
}

export default VaultComponent;
