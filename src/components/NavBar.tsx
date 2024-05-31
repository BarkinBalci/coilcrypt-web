import { useApp, useAuth } from '@realm/react';
import { ThemeToggle } from './themeToggle';

export function NavBar() {
  const app = useApp();
  const { logOut } = useAuth();
  const session = app.currentUser;

  return (
    <div className="bg-base-200 flex justify-center">
      <div className="navbar container">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-30"
            >
              {session && (
                <li>
                  <a href="/vault">Vault</a>
                </li>
              )}
              <li>
                <p>Tools</p>
                <ul className="p-2">
                  <li>
                    <a href="/cryptography">Cryptography</a>
                  </li>
                  <li>
                    <a href="/checksum">Checksum</a>
                  </li>
                </ul>
              </li>
              {session && (
                <li>
                  <a href="/settings">Settings</a>
                </li>
              )}
              <li>
                <a href="/download">Download</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-2xl">
            CoilCrypt
          </a>
          <ul className="menu menu-horizontal hidden lg:flex px-1">
            {session && (
              <li>
                <a href="/vault">Vault</a>
              </li>
            )}
            <li>
              <details>
                <summary>Tools</summary>
                <ul className="p-2 bg-base-100 shadow border">
                  <li>
                    <a href="/cryptography">Cryptography</a>
                  </li>
                  <li>
                    <a href="/checksum">Checksum</a>
                  </li>
                </ul>
              </details>
            </li>
            {session && (
              <li>
                <a href="/settings">Settings</a>
              </li>
            )}
            <li>
              <a href="/download">Download</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/signin" className="btn btn-ghost">
            Sign in
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
