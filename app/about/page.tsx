import { Metadata } from "next";
import * as React from "react";
import { Icons } from "../icons";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl pb-16">
        <div className="col-span-full text-center pt-16 pb-4 justif">
          <h1 className="text-3xl pb-2">Make Your Online Experience Safer, Faster, and More Enjoyable</h1>
          <p className="max-w-5xl mx-auto">
            Millions of users around the world, including many of the world&apos;s largest organizations, trust CoilCrypt to protect their online information
            using a transparent, open source approach to password management.
          </p>
        </div>
        <div className="col-span-full card lg:card-side bg-base-200">
          <div className="card-body ">
            <h2 className="card-title">Securing the Global Community with Open Source Transparency</h2>
            <p>
              Open source software sets CoilCrypt apart as the solution trusted by businesses and individuals to manage their online information easily and
              securely. Robust security standards protect critical data with end-to-end encryption and enable secure information sharing for safer online
              collaboration and increased productivity.
            </p>
          </div>
        </div>
        <div className="col-span-full card lg:card-side bg-base-200">
          <div className="card-body ">
            <h2 className="card-title">Who We Are and How to Join the CoilCrypt Mission</h2>
            <p>
              CoilCrypt envisions a world where no one gets hacked, and we recognize this is only possible by working together. The global CoilCrypt community
              shapes our mission to empower individuals, teams, and organizations to safely manage their sensitive information online. With responsibility,
              inclusion, and transparency at the core of our company values, we strive for excellence by delivering security solutions that anyone can use and
              everyone can trust.
            </p>
          </div>
        </div>
        <div className="col-span-full card lg:card-side bg-base-200">
          <div className="card-body ">
            <h2 className="card-title">A high-wire balancing act: business innovation and data security</h2>
            <p>
              The new eBook, Balancing Security and Innovation in the Age of AI, presents findings from a recent survey of 710 IT professionals to help address
              the dilemma of balancing innovation while staying secure.
            </p>
          </div>
        </div>
        <div className="col-span-full text-center pt-16 pb-4 ">
          <h1 className="text-3xl pb-2">More Ways to Get to Know CoilCrypt</h1>
        </div>
        <div className="card bg-base-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure className="px-10 pt-10">
            <Icons.about1 />
          </figure>
          <div className="card-body">
            <h2 className="card-title">View Updates & Announcements</h2>
            <p>Get the latest on new product features, online security best practices, and password management resources.</p>
          </div>
        </div>
        <div className="card bg-base-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure className="px-10 pt-10">
            <Icons.about2 />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Join the Social Community</h2>
            <p>Visit Bitwarden on social media where we share password security tips, best practices, and the latest product updates.</p>
          </div>
        </div>
        <div className="card bg-base-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <figure className="px-10 pt-10">
            <Icons.about3 />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Management Team</h2>
            <p>Barkın Balcı, CEO | LinkedIn</p>
            <p>İlker Güzelkokar, Intern | LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
