"use client";

import { useState } from "react";
import * as React from "react";
import { showToast } from "@/components/ui/toast";
import { Icons } from "../icons";
import { PasswordGenerator } from "@/components/ui/passwordGenerator";
import { encryptFile, decryptFile } from "@/lib/crypto";

export default function EncryptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [encryptedData, setEncryptedData] = useState<ArrayBuffer | null>(null);
  const [decryptedData, setDecryptedData] = useState<ArrayBuffer | null>(null);
  const [password, setPassword] = useState<string>("");
  const [operation, setOperation] = useState<"encrypt" | "decrypt">("encrypt");

  const handleEncryptFile = async (file: File, password: string) => {
    showToast({
      message: "Encrypting...",
      toastId: "encrypt",
      type: "loading",
    });
    try {
      const encryptedContentBuffer = await encryptFile(file, password);

      setEncryptedData(encryptedContentBuffer);
      downloadFile(encryptedContentBuffer, file.name + ".encrypted");

      showToast({
        message: "Encryption is done!",
        toastId: "encrypt",
        type: "success",
      });
    } catch (error) {
      showToast({
        message: `Encryption failed!`,
        toastId: "encrypt",
        type: "error",
      });
    }
  };

  const handleDecryptFile = async (file: File, password: string) => {
    showToast({
      message: "Decrypting...",
      toastId: "decrypt",
      type: "loading",
    });

    try {
      const decryptedContent = await decryptFile(file, password);
      setDecryptedData(decryptedContent);
      downloadFile(decryptedContent, file.name.replace(".encrypted", ""));

      showToast({
        message: "Decryption is done!",
        toastId: "decrypt",
        type: "success",
      });
    } catch (error) {
      showToast({
        message: `Decryption failed!`,
        toastId: "decrypt",
        type: "error",
      });
    }
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
            onClick={() =>
              file && password && handleEncryptFile(file, password)
            }
            disabled={operation === "decrypt"}
          >
            <span className="hidden lg:inline-block mr-2 whitespace-nowrap">
              Encrypt
            </span>
            <Icons.locked />
          </button>
          <button
            className="btn btn-accent join-item"
            onClick={() =>
              file && password && handleDecryptFile(file, password)
            }
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
