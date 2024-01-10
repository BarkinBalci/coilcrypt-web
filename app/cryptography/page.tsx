import { Cryptography } from "@/components/ui/cryptography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptography",
  description: "",
};

export default function EncryptionPage() {

  return (
    <div>
      <Cryptography/>
    </div>
  );
}
