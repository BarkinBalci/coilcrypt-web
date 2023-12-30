import { Metadata } from "next";
import { SidebarNav } from "@/components/ui/sidebar-nav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "",
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

export default function termsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="space-y-6 md:block">
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
          <SidebarNav items={sidebarNavItems} >
          {children}
          </SidebarNav>
      </div>
    </div>
  );
}
