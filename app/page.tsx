import { Metadata } from "next";
import * as React from "react";
import { Icons } from "./icons";

export const metadata: Metadata = {
  title: "CoilCrypt - Home",
  description: "",
};

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4">
      <h1 className="text-3xl pt-16 pb-4 flex-wrap text-center">
        Everything you need out of a password manager
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <Icons.landing1/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Powerful security within minutes</h2>
            <p>
              For those who want to do more, secure more, and collaborate more,
              CoilCrypt is fast and easy to set up for both individuals and
              businesses.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <Icons.landing2/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Unlimited passwords, unlimited devices
            </h2>
            <p>Cross platform access for mobile, browser, and desktop apps.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <Icons.landing3/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Protect what&apos;s important to you</h2>
            <p>
              Zero knowledge, end-to-end encryption guides the CoilCrypt open
              source approach to trust, accountability, and security.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl pt-16 pb-12 text-center">
        CoilCrypt helps businesses run quickly and securely
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 pb-16">
        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              University of Toronto Press solves for efficient password sharing
              with CoilCrypt
            </h2>
            <p>
              Robust password management, secure sharing, and powerful
              application commands simplify workflows and enhance security for
              one of North America’s largest university presses.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              High-growth delivery startup Glovo boosts password security and
              compliance with CoilCrypt
            </h2>
            <p>
              Open source transparency, end-to-end encryption, and
              cross-platform accessibility were reasons why Glovo selected
              CoilCrypt for secure password management.{" "}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Case Study - How Intesys uses CoilCrypt for business collaboration
            </h2>
            <p>
              Intesys chose CoilCrypt primarily because of the open source
              nature of the software and the opportunity to use it on-premises.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
