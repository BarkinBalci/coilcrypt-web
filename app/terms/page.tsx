import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import rehypeSlug from "rehype-slug";

export default function TermsPage() {
  return (
    <div className="flex flex-col space-y-6 pt-6 pb-24 mx-6">
      <ReactMarkdown
        rehypePlugins={[rehypeSlug]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold pt-6" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg font-bold opacity-75" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-6" {...props} />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
      <Separator />
    </div>
  );
}

const markdownContent = `
# Terms of Service

## Overview
### 1.1 Acceptance of Terms:
By accessing or using [Your Company Name]'s services, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.

### 1.2 Changes to Terms:
[Your Company Name] reserves the right to modify or revise these terms at any time. Your continued use of the services after any changes indicates your acceptance of the modified terms.

## User Obligations
### 2.1 Account Registration:
To access certain features of the services, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

### 2.2 User Conduct:
Users agree not to engage in any activity that may disrupt or interfere with the services, including the introduction of viruses, spam, or any other harmful code.

### 2.3 Data Accuracy:
Users are responsible for providing accurate and up-to-date information. [Your Company Name] is not responsible for any consequences resulting from inaccurate or incomplete user-provided data.

## Use of Services
### 3.1 Scope of Services:
[Your Company Name] provides services as described in the service documentation. The scope of services may be updated or modified by [Your Company Name] at its discretion.

### 3.2 Prohibited Activities:
Users agree not to engage in any activities that violate applicable laws, infringe on the rights of others, or breach these terms. Prohibited activities include, but are not limited to, unauthorized access to the services and use of the services for illegal purposes.

### 3.3 Service Availability:
[Your Company Name] strives to ensure uninterrupted service availability. However, [Your Company Name] does not guarantee that the services will be available at all times, and downtime may occur for maintenance or other reasons.

## Intellectual Property
### 4.1 Ownership of Content:
All content provided by [Your Company Name], including but not limited to text, graphics, logos, and software, is the property of [Your Company Name] or its licensors and is protected by intellectual property laws.

### 4.2 Trademarks and Copyrights:
The trademarks, service marks, and logos used and displayed on the services are the registered and unregistered trademarks of [Your Company Name] and its licensors. Users may not use these trademarks without the prior written permission of [Your Company Name].

## Payment and Billing
### 5.1 Payment Methods:
Users agree to provide accurate and complete payment information when subscribing to premium services. [Your Company Name] may use third-party payment processors to handle transactions.

### 5.2 Subscription Plans:
Subscription plans, fees, and billing cycles are outlined in the service documentation. Users are responsible for paying all applicable fees associated with their selected subscription plan.

### 5.3 Billing Cycles:
Billing cycles are specified in the service documentation. Failure to pay fees may result in the suspension or termination of services.

## Termination
### 6.1 Termination by User:
Users may terminate their account at any time by following the instructions provided in the services. Any outstanding fees must be paid before termination.

### 6.2 Termination by Company:
[Your Company Name] reserves the right to suspend or terminate user accounts for violations of these terms or for any other reason deemed necessary by [Your Company Name].

## Disclaimer of Warranties
### 7.1 Use at Your Own Risk:
Users acknowledge that the services are provided "as is" and use them at their own risk. [Your Company Name] makes no warranties, express or implied, regarding the services' accuracy, reliability, or suitability for a particular purpose.

### 7.2 Warranty Limitations:
To the extent permitted by law, [Your Company Name] disclaims all warranties, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.

## Governing Law
### 9.1 Applicable Law:
These terms are governed by the laws of [Your Jurisdiction]. Users consent to the exclusive jurisdiction and venue of the courts in [Your Jurisdiction] for all disputes arising out of or relating to these terms.

### 9.2 Dispute Resolution:
Any disputes between [Your Company Name] and users will be resolved through arbitration, in accordance with the rules of the [Arbitration Association]. The arbitration award is binding and may be entered as a judgment in any court with jurisdiction.

## Miscellaneous
### 10.1 Entire Agreement:
These terms constitute the entire agreement between the user and [Your Company Name] and supersede any prior agreements or understandings, whether written or oral.

### 10.2 Severability:
If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.

### 10.3 Waiver:
The failure of [Your Company Name] to enforce any right or provision of these terms will not be deemed a waiver of such right or provision.
`;
