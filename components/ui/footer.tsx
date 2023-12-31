import * as React from "react";
import { SubFooter } from "./subfooter";

export function Footer() {
  return (
    <div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <footer className="footer p-10 text-base-content">
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a href="/terms" className="link link-hover">
                Terms of Service
              </a>
              <a href="/privacy" className="link link-hover">
                Privacy policy
              </a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <header className="footer-title">Tools</header>
              <a className="link link-hover">Password Generator</a>
              <a className="link link-hover">Password Strenght Tester</a>
              <a className="link link-hover">Checksum</a>
            </nav>
          </footer>
        </div>
      </div>
      <SubFooter/>
    </div>
  );
}
