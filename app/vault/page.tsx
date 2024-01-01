import {VaultHero} from "@/components/ui/vaulthero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault",
  description: "",
};

export default async function VaultPage() {
  return (
    <div>
      <VaultHero/>
    </div>
  );
}