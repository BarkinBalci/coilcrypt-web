import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/ui/sidebar-nav";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Overview",
    href: "#overview",
  },
  {
    title: "User Obligations",
    href: "#user-obligations",
  },
  {
    title: "Use of Services",
    href: "#use-of-services",
  },
  {
    title: "Intellectual Property",
    href: "#intellectual-property",
  },
  {
    title: "Payment and Billing",
    href: "#payment-and-billing",
  },
  {
    title: "Termination",
    href: "#termination",
  },
  {
    title: "Disclaimer of Warranties",
    href: "#disclaimer-of-warranties",
  },
  {
    title: "Limitation of Liability",
    href: "#limitation-of-liability",
  },
  {
    title: "Governing Law",
    href: "#governing-law",
  },
  {
    title: "Miscellaneous",
    href: "#miscellaneous",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function policyLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Terms of Service</h2>
        <p className="text-muted-foreground">
          Explore our privacy policy to understand how we safeguard your
          personal information and ensure your online privacy.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/6">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
