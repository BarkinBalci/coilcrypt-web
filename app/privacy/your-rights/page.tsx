import { Separator } from "@/components/ui/separator";

export default function yourRights() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Your Rights</h3>
        <p className="text-sm text-muted-foreground">
          As a user of our services, you have certain rights regarding your
          personal information. These rights may include the ability to access,
          correct, or delete your data. We are dedicated to respecting and
          fulfilling your privacy rights. To learn more, please visit our Your
          Rights page.
        </p>
      </div>
      <Separator />
    </div>
  );
}