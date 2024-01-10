import { Checksum } from "@/components/ui/checksum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checksum",
  description: "",
};

export default function ChecksumPage() {

  return (
    <div>
      <Checksum />
    </div>
  )
}
