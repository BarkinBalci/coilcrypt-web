import * as React from "react"

export function Navbar() {
  return (
<div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Overview</a></li>
        <li><a>Help</a></li>
        <li>
          <a>Settings</a>
          <ul className="p-2">
            <li><a>Dark</a></li>
            <li><a>Light</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-xl">CoilCrypt</a>
    <ul className="menu menu-horizontal  hidden lg:flex px-1">
      <li><a>Overview</a></li>
      <li><a>Help</a></li>
      <li>
        <details>
          <summary>Settings</summary>
          <ul className="p-2">
            <li><a>Dark</a></li>
            <li><a>Light</a></li>
          </ul> 
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" btn btn-ghost" href="/api/auth/signin">Sign-in</a>
  </div>
</div>
  )
}