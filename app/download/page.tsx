import { Metadata } from "next";
import * as React from "react";
import { Icons } from "../icons";

export const metadata: Metadata = {
  title: "Download",
  description: "",
};

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
        <div className="col-span-full text-center pt-16 pb-4">
          <h1 className="text-3xl pb-2">Desktop Applications</h1>
          <p>
            Access GearCrypt on Windows, macOS, and Linux desktops with native
            applications, powered by Electron.
          </p>
        </div>
        <div className="card card-side bg-base-200">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.windows />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Windows</h2>
            <p>Support for Windows 10 and 11</p>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.macos />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MacOS</h2>
            <p>Support for MacOS 10.14+ and Safari 14+</p>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.linux />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Linux</h2>
            <p>Support for most distributions</p>
          </div>
        </div>
        <div className="col-span-full text-center pt-16 pb-4">
          <h1 className="text-3xl pb-2">Web Browser Extensions</h1>
          <p>
            Integrate CoilCrypt directly into your favorite browser with browser
            extensions for a seamless browsing experience.
          </p>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.chrome />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Chrome</h2>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.safari />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Safari</h2>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.firefox />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mozilla Firefox</h2>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.edge />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Microsoft Edge</h2>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.vivaldi />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vivaldi</h2>
          </div>
        </div>
        <div className="card card-side bg-base-200 flex flex-1">
          <figure className="px-5 py-5 max-h-36 max-w-36">
            <Icons.opera />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Opera</h2>
          </div>
        </div>
        <div className="col-span-full text-center pt-16 pb-16">
          <h1 className="text-3xl pb-2">Web Application</h1>
          <p className="pb-6">
            Need to access account settings or are using a friend&apos;s
            computer?
            <br />
            Access your password manager from any web browser with the CoilCrypt
            web app.
            <br />
          </p>
          <a className="btn btn-accent ob" href="/vault">
            Web Vault
          </a>
        </div>
      </div>
    </div>
  );
}
