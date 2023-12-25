import { Separator } from "@/components/ui/separator";

export default function securityMeasures() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security Measures</h3>
        <p className="text-sm text-muted-foreground">
          We prioritize the security of your personal information and employ
          various measures to protect it from unauthorized access, disclosure,
          alteration, and destruction. Our commitment to data security is a
          fundamental aspect of our services. To learn more, please visit our
          Security Measures page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
