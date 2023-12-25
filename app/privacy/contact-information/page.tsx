import { Separator } from "@/components/ui/separator";

export default function contactInformation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Contact Information</h3>
        <p className="text-sm text-muted-foreground">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at the following: [Your
          Company/Website Name] [Contact Information] To learn more, please visit
          our Contact Information page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
