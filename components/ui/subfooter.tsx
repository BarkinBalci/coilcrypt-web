import * as React from "react";
import { Icons } from "@/app/icons";

export function SubFooter() {
  return (
    <div className="bg-base-100">
      <div className="container mx-auto">
        <footer className="footer px-10 py-4 text-base-content">
          <aside className="items-center grid-flow-col">
            <p>&#169; 2023 CoilCrypt. All rights reserved.</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://github.com/BarkinBalci/coilcrypt">
                <Icons.gitHub className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}
