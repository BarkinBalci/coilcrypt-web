"use client";

import React, { useEffect, useState } from "react";

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

function VaultComponent() {
    const [vault, setVault] = useState<Vault | null>(null);

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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Notes:</h2>
            {vault.notes.map((note) => (
                <div key={note.id} className="pb-10">
                    <h3>{note.name}</h3>
                    <p>{note.content}</p>
                    <p>Creation Date: {new Date(note.creationDate).toLocaleString()}</p>
                    <p>Revision Date: {new Date(note.revisionDate).toLocaleString()}</p>
                </div>
            ))}

            <h2>Credentials:</h2>
            {vault.credentials.map((credential) => (
                <div key={credential.id} className="pb-10">
                    <h3>{credential.name}</h3>
                    <p>
                        URL: <a href={credential.url}>{credential.url}</a>
                    </p>
                    <p>Username: {credential.username}</p>
                    <p>Password: {credential.password}</p>
                    <p>
                        Creation Date: {new Date(credential.creationDate).toLocaleString()}
                    </p>
                    <p>
                        Revision Date: {new Date(credential.revisionDate).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default VaultComponent;
