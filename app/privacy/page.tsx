import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mt-4">
          <h2 id="overview" className="text-lg font-medium">
            Overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Welcome to [Your Company/Website Name]. This
            Privacy Policy is designed to inform you about how we collect, use,
            disclose, and safeguard your personal information. By using our
            website and services, you agree to the terms outlined in this
            policy. For more details, please visit our Overview page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="information-we-collect" className="text-lg font-medium">
            Information We Collect
          </h2>
          <p className="text-sm text-muted-foreground">
            At [Your Company/Website Name], we collect various types of
            information to provide and improve our services. This may include
            personal information, such as your name, contact information, and
            usage data. To learn more about the types of information we collect
            and how we gather it, please visit our Information We Collect page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="how-we-use-your-information" className="text-lg font-medium">
            How We Use Your Information
          </h2>
          <p className="text-sm text-muted-foreground">
            We use the information we collect for various purposes, including to
            provide and improve our services, personalize your experience, and
            communicate with you. We are committed to ensuring that your
            information is used responsibly and in accordance with applicable
            laws. To learn more, please visit our How We Use Your Information
            page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="your-rights" className="text-lg font-medium">
            Your Rights
          </h2>
          <p className="text-sm text-muted-foreground">
            As a user of our services, you have certain rights regarding your
            personal information. These rights may include the ability to
            access, correct, or delete your data. We are dedicated to respecting
            and fulfilling your privacy rights. To learn more, please visit our
            Your Rights page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="security-measures" className="text-lg font-medium">
            Security Measures
          </h2>
        @  <p className="text-sm text-muted-foreground">
            We prioritize the security of your personal information and employ
            various measures to protect it from unauthorized access, disclosure,
            alteration, and destruction. Our commitment to data security is a
            fundamental aspect of our services. To learn more, please visit our
            Security Measures page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="data-deletion" className="text-lg font-medium">
            Data Deletion
          </h2>
          <p className="text-sm text-muted-foreground">
            If you wish to delete your personal information from our records, we
            provide options to do so. Our Data Deletion procedures are designed
            to respect your privacy preferences. To learn more, please visit our
            Data Deletion page.
          </p>
        </div>
        <div className="mt-4">
          <h2
            id="updates-to-this-privacy-policy"
            className="text-lg font-medium"
          >
            Updates to This Privacy Policy
          </h2>
          <p className="text-sm text-muted-foreground">
             We may update this Privacy Policy from time to time to reflect
            changes in our practices and services. It is important to review
            this policy periodically for any updates. To learn more, please
            visit our Updates to This Privacy Policy page.
          </p>
        </div>
        <div className="mt-4">
          <h2 id="contact-information" className="text-lg font-medium">
            Contact Information
          </h2>
          <p className="text-sm text-muted-foreground">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at the following: [Your
            Company/Website Name] [Contact Information] To learn more, please
            visit our Contact Information page.
          </p>
        </div>
      </div>
      <Separator />
    </div>
  );
}
