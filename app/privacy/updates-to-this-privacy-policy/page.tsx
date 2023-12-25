import { Separator } from "@/components/ui/separator";

export default function updatesToPrivacyPolicy() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Updates to This Privacy Policy</h3>
        <p className="text-sm text-muted-foreground">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices and services. It is important to review this policy
          periodically for any updates. To learn more, please visit our Updates
          to This Privacy Policy page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
