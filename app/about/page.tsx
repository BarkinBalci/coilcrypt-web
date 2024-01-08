import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen h-full items-center justify-center">
      The about page is currently work in progress.
    </div>
  );
}
