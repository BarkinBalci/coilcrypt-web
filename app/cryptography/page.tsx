"use client";

import { useState } from "react";
import * as React from "react";
import { showToast } from "@/components/ui/toast";
import { Icons } from "../icons";
import { PasswordGenerator } from "@/components/ui/passwordGenerator";

export default function EncryptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [encryptedData, setEncryptedData] = useState<ArrayBuffer | null>(null);
  const [decryptedData, setDecryptedData] = useState<ArrayBuffer | null>(null);
  const [password, setPassword] = useState<string>("");
  const [operation, setOperation] = useState<"encrypt" | "decrypt">("encrypt");

  const encryptFile = async (file: File, password: string) => {
    showToast({
      message: "Encrypting...",
      toastId: "encrypt",
      type: "loading",
    });
    const fileData = await file.arrayBuffer();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const passwordKey = await window.crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    const aesKey = await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256",
      },
      passwordKey,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv: iv,
      },
      aesKey,
      fileData
    );

    const encryptedContent = new Uint8Array(
      salt.byteLength + iv.byteLength + encryptedData.byteLength
    );
    encryptedContent.set(new Uint8Array(salt), 0);
    encryptedContent.set(new Uint8Array(iv), salt.byteLength);
    encryptedContent.set(
      new Uint8Array(encryptedData),
      salt.byteLength + iv.byteLength
    );
    showToast({
      message: "Encryption is done!",
      toastId: "encrypt",
      type: "success",
    });

    setEncryptedData(encryptedContent.buffer);
    downloadFile(encryptedContent.buffer, file.name + ".encrypted");
  };

  const decryptFile = async (file: File, password: string) => {
    showToast({
      message: "Decrypting...",
      toastId: "decrypt",
      type: "loading",
    });
    const fileData = await file.arrayBuffer();
    const salt = fileData.slice(0, 16);
    const iv = fileData.slice(16, 32);
    const actualEncryptedData = fileData.slice(32);
    const passwordKey = await window.crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    const aesKey = await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256",
      },
      passwordKey,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
    const decryptedContent = await window.crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv: iv,
      },
      aesKey,
      actualEncryptedData
    );
    showToast({
      message: "Decryption is done!",
      toastId: "decrypt",
      type: "success",
    });
    setDecryptedData(decryptedContent);
    downloadFile(decryptedContent, file.name.replace(".encrypted", ""));
  };

  const downloadFile = (content: ArrayBuffer, fileName: string) => {
    // Create a Blob from the content
    const blob = new Blob([new Uint8Array(content)], {
      type: "application/octet-stream",
    });

    // Create a URL from the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to start the download
    link.click();

    // Clean up by revoking the Object URL and removing the link
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFile(file);

    // Change the operation based on the file extension
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension === "encrypted") {
      setOperation("decrypt");
    } else {
      setOperation("encrypt");
    }
  };

  return (
    <div className="min-h-screen h-full flex-col flex items-center space-y-6 mx-auto pt-6 max-w-5xl px-4">
      <div className="flex flex-col mx-auto w-full">
        <div className="label">
          <span className="label-text">Crytography:</span>
        </div>  
        <div className="join w-full">
          <label className="flex items-center btn btn-accent join-item">
            <span className="leading-normal md:hidden">
              <Icons.file />
            </span>
            <span className="hidden md:leading-normal md:block">
              Choose File
            </span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          <input
            type="text"
            className="input input-accent join-item w-full truncate"
            value={file ? file.name : ""}
            readOnly
          />
          <button
            className="btn btn-accent join-item"
            onClick={() => file && password && encryptFile(file, password)}
            disabled={operation === "decrypt"}
          >
            <span className="hidden lg:inline-block mr-2 whitespace-nowrap">
              Encrypt
            </span>
            <Icons.locked />
          </button>
          <button
            className="btn btn-accent join-item"
            onClick={() => file && password && decryptFile(file, password)}
            disabled={operation === "encrypt"}
          >
            <span className="hidden lg:inline-block mr-2 whitespace-nowrap">
              Decrypt
            </span>
            <Icons.unlocked />
          </button>
        </div>
      </div>
      <PasswordGenerator onPasswordChange={setPassword} />
    </div>
  );
}
