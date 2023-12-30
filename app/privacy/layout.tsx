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
    title: "Information We Collect",
    href: "#information-we-collect",
  },
  {
    title: "How We Use Your Information",
    href: "#how-we-use-your-information",
  },
  {
    title: "Your Rights",
    href: "#your-rights",
  },
  {
    title: "Security Measures",
    href: "#security-measures",
  },
  {
    title: "Data Deletion",
    href: "#data-deletion",
  },
  {
    title: "Updates to This Privacy Policy",
    href: "#updates-to-this-privacy-policy",
  },
  {
    title: "Contact Information",
    href: "#contact-information",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function policyLayout({ children }: SettingsLayoutProps) {
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
