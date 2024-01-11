import { Metadata } from "next";
import * as React from "react";
import { Icons } from "./icons";

export const metadata: Metadata = {
  title: "CoilCrypt",
  description: "",
};

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl pb-16">
        <div className="col-span-full text-center pt-16 pb-4">
          <h1 className="text-3xl pb-2">Everything you need out of a password manager</h1>
        </div>
        <div className="card card-compact bg-base-100">
          <figure className="px-10 pt-10">
            <Icons.landing1 />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Powerful security within minutes</h2>
            <p>For those who want to do more, secure more, and collaborate more, CoilCrypt is fast and easy to set up for both individuals and businesses.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 flex flex-1">
          <figure className="px-10 pt-10">
            <Icons.landing2 />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Unlimited passwords, unlimited devices</h2>
            <p>Cross platform access for mobile, browser, and desktop apps.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 flex flex-1">
          <figure className="px-10 pt-10">
            <Icons.landing3 />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Protect what&apos;s important to you</h2>
            <p>Zero knowledge, end-to-end encryption guides the CoilCrypt open source approach to trust, accountability, and security.</p>
          </div>
        </div>
        <div className="col-span-full text-center pt-16 pb-4">
          <h1 className="text-3xl pb-2">CoilCrypt helps businesses run quickly and securely</h1>
        </div>
        <div className="card bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure>
            <Icons.vault />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Protect more than your passwords</h2>
            <p>Store all types of sensitive data, transmit it securely to anyone, access vault health reports—and much more.</p>
          </div>
        </div>
        <div className="card bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure>
            <Icons.magnify />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gain peace of mind with comprehensive compliance</h2>
            <p>
              Protect your online data using a password manager you can trust. CoilCrypt conducts regular third-party security audits comliant with industry
              standarts.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure>
            <Icons.share />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Securely share encrypted information directly with anyone</h2>
            <p>
              CoilCrypt&apos;s share feature allows all users to transmit data directly to others, while maintaining end-to-end encrypted security and limiting
              exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
