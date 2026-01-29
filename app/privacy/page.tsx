"use client";

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: January 29, 2026</p>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Roblox Trade Hub ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and interactions.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type, and IP address.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Display relevant advertisements</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Third-Party Advertising</h2>
          <p className="mb-4">
            We use Google AdSense to display advertisements on our website. Google may use cookies and web beacons to collect information about your visits to this and other websites to provide relevant advertisements.
          </p>
          <p className="mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">5. Cookies</h2>
          <p className="mb-4">
            Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences.
          </p>
          <p className="mb-4">Types of cookies we use:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">8. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
