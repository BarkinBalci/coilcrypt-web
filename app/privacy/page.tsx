import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import rehypeSlug from 'rehype-slug';

export default function privacyPage() {
    return (
        <div className="space-y-6">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>{markdownContent}</ReactMarkdown>   
            <Separator />
        </div>
    );
}

const markdownContent = `
## Overview
Welcome to [Your Company/Website Name]. This Privacy Policy is designed to inform you about how we collect, use, disclose, and safeguard your personal information. By using our website and services, you agree to the terms outlined in this policy. For more details, please visit our Overview page.

## Information We Collect
At [Your Company/Website Name], we collect various types of information to provide and improve our services. This may include personal information, such as your name, contact information, and usage data. To learn more about the types of information we collect and how we gather it, please visit our Information We Collect page.

## How We Use Your Information
We use the information we collect for various purposes, including to provide and improve our services, personalize your experience, and communicate with you. We are committed to ensuring that your information is used responsibly and in accordance with applicable laws. To learn more, please visit our How We Use Your Information page.

## Your Rights
As a user of our services, you have certain rights regarding your personal information. These rights may include the ability to access, correct, or delete your data. We are dedicated to respecting and fulfilling your privacy rights. To learn more, please visit our Your Rights page.

## Security Measures
We prioritize the security of your personal information and employ various measures to protect it from unauthorized access, disclosure, alteration, and destruction. Our commitment to data security is a fundamental aspect of our services. To learn more, please visit our Security Measures page.

## Data Deletion
If you wish to delete your personal information from our records, we provide options to do so. Our Data Deletion procedures are designed to respect your privacy preferences. To learn more, please visit our Data Deletion page.

## Updates to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices and services. It is important to review this policy periodically for any updates. To learn more, please visit our Updates to This Privacy Policy page.

## Contact Information
If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at the following: [Your Company/Website Name] [Contact Information] To learn more, please visit our Contact Information page.
`;
