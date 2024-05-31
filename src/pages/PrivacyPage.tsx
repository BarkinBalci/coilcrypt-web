import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import { Sidebar } from '../components/Sidebar'

export const PrivacyPage = () => {
  const sidebarNavItems = [
    {
      title: 'Overview',
      href: '#overview',
    },
    {
      title: 'Information We Collect',
      href: '#information-we-collect',
    },
    {
      title: 'How We Use Your Information',
      href: '#how-we-use-your-information',
    },
    {
      title: 'Your Rights',
      href: '#your-rights',
    },
    {
      title: 'Security Measures',
      href: '#security-measures',
    },
    {
      title: 'Data Deletion',
      href: '#data-deletion',
    },
    {
      title: 'Updates to This Privacy Policy',
      href: '#updates-to-this-privacy-policy',
    },
    {
      title: 'Contact Information',
      href: '#contact-information',
    },
  ]
  return (
    <div style={{ flex: 1, flexDirection: 'row' }}>
      <div className='space-y-6 md:block'>
        <div className='flex flex-col space-y-6 lg:flex-row lg:space-y-0'>
          <Sidebar items={sidebarNavItems}>
            {
              <div className='flex flex-col space-y-6 pt-6 pb-24 mx-6'>
                <ReactMarkdown
                  rehypePlugins={[rehypeSlug]}
                  components={{
                    h1: ({ node, ...props }) => <h1 className='text-3xl font-bold' {...props} />,
                    h2: ({ node, ...props }) => <h2 className='text-xl font-bold pt-6' {...props} />,
                    h3: ({ node, ...props }) => <h3 className='text-lg font-bold opacity-75' {...props} />,
                    p: ({ node, ...props }) => <p className='text-base leading-6' {...props} />,
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            }
          </Sidebar>
        </div>
      </div>
    </div>
  )
}

const markdownContent = `
# Privacy Policy

## Overview
### 1. Introduction
Welcome to [Your Company Name]! These terms of service ("Terms") govern your access and use of our services. By using our services, you agree to comply with and be bound by these Terms. Please read them carefully before proceeding.

### 1.1 Acceptance of Terms
By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.

## Information We Collect
### 2. Types of Information Collected
We collect various types of information to provide and improve our services. This includes:

### 2.1 Personal Information
- 2.1.1 Name
- 2.1.2 Contact Information
- 2.1.3 Payment Details

### 2.2 Non-Personal Information
- 2.2.1 Usage Patterns
- 2.2.2 Interactions with Our Platform

### 2.3 Collection Methods
We employ different methods to collect information, such as cookies, log files, and third-party analytics tools. Each method is designed to enhance your experience and improve our services.

## How We Use Your Information
### 3. Purpose of Information Usage
We use the collected information for various purposes, including:

### 3.1 Service Enhancement
- 3.1.1 Personalization
- 3.1.2 User Experience Improvement

### 3.2 Customer Support
- 3.2.1 Assistance with Inquiries
- 3.2.2 Issue Resolution

### 3.3 Security and Compliance
- 3.3.1 Protection Against Unauthorized Access
- 3.3.2 Compliance with Applicable Laws

### 3.4 Third-Party Sharing
In certain instances, we may share information with third-party service providers. This sharing is outlined in detail in subsequent sections.

## Your Rights
### 4. User Rights
As a user, you have specific rights regarding your information, including:

### 4.1 Access
- 4.1.1 Request for Access to Personal Information
- 4.1.2 Access to Usage Data

### 4.2 Correction
- 4.2.1 Updating Personal Information
- 4.2.2 Correction of Inaccurate Data

### 4.3 Deletion
- 4.3.1 Request for Deletion of Personal Information
- 4.3.2 Deletion of Non-Essential Data

### 4.4 Opt-Out
Users have the right to opt-out of certain data collection practices. Details on opting out are provided in the subsequent sections.

## Security Measures
### 5. Security Protocols
Protecting your information is our top priority. We have implemented various security measures, including:

### 5.1 Encryption
- 5.1.1 Data Transmission Encryption
- 5.1.2 Stored Data Encryption

### 5.2 Access Controls
- 5.2.1 Restricted Access to Sensitive Information
- 5.2.2 Two-Factor Authentication

### 5.3 Regular Audits
- 5.3.1 Internal Audits
- 5.3.2 Third-Party Security Audits

## Data Deletion
### 6. Deletion Procedures
Users have the right to request the deletion of their data. The deletion process involves:

### 6.1 User-Requested Deletion
- 6.1.1 Submitting a Deletion Request
- 6.1.2 Confirmation of Deletion

### 6.2 Retention Periods
Different types of information have varying retention periods. This section outlines the retention timelines for each category.

## Updates to This Privacy Policy
### 7. Policy Modification
This Privacy Policy may be updated to reflect changes in our practices and services. Users are encouraged to review this section regularly for updates.

### 7.1 Notification of Changes
When significant changes are made to the Privacy Policy, users will be notified through appropriate channels, such as email or in-app notifications.

## Contact Information
### 8. Customer Support
If you have any questions, concerns, or requests regarding these Terms or our privacy practices, please contact our customer support team at [Your Contact Information]. We are here to assist you and address any issues promptly.

*Remember to replace "[Your Company Name]" and "[Your Contact Information]" with your actual company name and contact details.*

`;
