import { Separator } from "@/components/ui/separator";
export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Overview</h3>
        <p className="text-sm text-muted-foreground">
          Welcome to [Your Company/Website Name] ("we," "us," or "our"). This
          Privacy Policy is designed to inform you about how we collect, use,
          disclose, and safeguard your personal information. By using our
          website and services, you agree to the terms outlined in this policy.
          For more details, please visit our Overview page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
