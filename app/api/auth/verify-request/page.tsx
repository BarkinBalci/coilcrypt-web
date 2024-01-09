import { VerificationDialog } from "@/components/ui/verification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification",
  description: "",
};

export default function VerificationPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <VerificationDialog/>
        </div>
    );
}