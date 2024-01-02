import { VaultCreateHero } from "@/components/ui/vaultCreateHero";
import { VaultUnlockHero } from "@/components/ui/vaultUnlockHero";
import { authConfig } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Vault",
  description: "",
};

export default async function VaultPage() {
  const session = await getServerSession(authConfig)
  if (!session) {
    redirect("/api/auth/signin")
  }
  return (
    <div>
      <VaultCreateHero/>
    </div>
  );
}