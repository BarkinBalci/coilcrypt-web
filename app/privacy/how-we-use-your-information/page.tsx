import { Separator } from "@/components/ui/separator";

export default function howWeUseYourInformation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">How We Use Your Information</h3>
        <p className="text-sm text-muted-foreground">
          We use the information we collect for various purposes, including to
          provide and improve our services, personalize your experience, and
          communicate with you. We are committed to ensuring that your
          information is used responsibly and in accordance with applicable laws.
          To learn more, please visit our How We Use Your Information page.
        </p>
      </div>
      <Separator />
    </div>
  );
}