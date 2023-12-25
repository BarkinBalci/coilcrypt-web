import { Separator } from "@/components/ui/separator";

export default function dataDeletion() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Data Deletion</h3>
        <p className="text-sm text-muted-foreground">
          If you wish to delete your personal information from our records, we
          provide options to do so. Our Data Deletion procedures are designed to
          respect your privacy preferences. To learn more, please visit our Data
          Deletion page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
