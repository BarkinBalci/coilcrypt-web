import { useState } from "react";
import * as React from "react";
// import { createHash } from "crypto";
import { Icons } from "../icons";
import { showToast } from "../components/toast";

export const ChecksumPage = () => {
  const [hash, setHash] = useState<string | null>(null);
  const [algorithm, setAlgorithm] = useState<string>("sha256");
  const [progress, setProgress] = useState<number>(0);
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState<File | null>(null);

  const calculateHash = async (file: File) => {
    // const chunkSize = 1024 * 1024; // 1MB
    // const chunks = Math.ceil(file.size / chunkSize);

    // const hash = createHash(algorithm);

    // for (let i = 0; i < chunks; i++) {
    //   const offset = i * chunkSize;
    //   const chunk = await file.slice(offset, offset + chunkSize).arrayBuffer();
    //   hash.update(Buffer.from(new Uint8Array(chunk)));
    //   setProgress((i / chunks) * 100);
    // }

    // setHash(hash.digest("hex"));
    // setProgress(100);
    // showToast({
    //   message: "Checksum is done!",
    //   toastId: "checksum",
    //   type: "success",
    // });
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file ? file.name : "No file chosen");
    setFile(file);
    await calculateHash(file);
  };

  const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(event.target.value);
  };

  const handleRefreshClick = async () => {
    if (file) {
      setHash(null);
      await calculateHash(file);
    }
  };

  const copyToClipboard = () => {
    if (hash) {
      navigator.clipboard.writeText(hash);
      showToast({
        message: "Copied to clipboard!",
        toastId: "clipboard",
        type: "success",
      });
    }
  };

  return (
    <div className="min-h-screen h-full flex-col flex items-center space-y-6 mx-auto pt-6 max-w-5xl px-4">
      <div className="flex flex-col mx-auto w-full">
        <div className="label">
          <span className="label-text">Checksum:</span>
        </div>
        <div className="join w-full">
          <label className="flex items-center btn btn-accent join-item">
            <span className="leading-normal md:hidden">
              <Icons.File />
            </span>
            <span className="hidden md:leading-normal md:block">Choose File</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          <input type="text" className="input input-accent join-item w-full truncate" value={fileName} readOnly />
          <select className="select select-accent join-item" onChange={handleAlgorithmChange}>
            <option value="sha256">SHA-256</option>
            <option value="md5">MD5</option>
            <option value="sha1">SHA-1</option>
          </select>
          <button className="btn btn-accent join-item" onClick={handleRefreshClick}>
            <Icons.Refresh />
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full">
        <div className="label">
          <span className="label-text">Hash:</span>
        </div>
        <div className="join w-full">
          <input type="text" className="input input-bordered join-item w-full" value={hash || ""} readOnly />
          <button className="btn join-item btn-secondary" onClick={copyToClipboard}>
            <Icons.Clipboard />
          </button>
        </div>
      </div>
      <progress className="progress progress-accent w-full" value={progress} max="100"></progress>
    </div>
  );
};