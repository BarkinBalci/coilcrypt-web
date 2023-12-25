import { Separator } from "@/components/ui/separator";
export default function informationWeCollect() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Information We Collect</h3>
        <p className="text-sm text-muted-foreground">
          At [Your Company/Website Name], we collect various types of
          information to provide and improve our services. This may include
          personal information, such as your name, contact information, and
          usage data. To learn more about the types of information we collect
          and how we gather it, please visit our Information We Collect page.
        </p>
      </div>
      <Separator />
    </div>
  );
}
