"use client";
import { useEffect, useState } from "react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
  children?: React.ReactNode;
}

export function SidebarNav({
  className,
  items,
  children,
  ...props
}: SidebarNavProps) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = "";
      for (let i = 0; i < items.length; i++) {
        const element = document.querySelector(items[i].href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0) {
            currentLink = items[i].href;
            if (i + 1 < items.length) {
              const nextElement = document.querySelector(items[i + 1].href);
              if (nextElement) {
                const nextRect = nextElement.getBoundingClientRect();
                if (nextRect.top > 0) {
                  break;
                }
              }
            }
          }
        }
      }
      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={item.href === activeLink ? "font-bold" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView();
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
