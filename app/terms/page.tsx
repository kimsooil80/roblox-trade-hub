"use client";

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: January 29, 2026</p>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Roblox Trade Hub ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Description of Service</h2>
          <p className="mb-4">
            Roblox Trade Hub provides a free value calculator and trading information service for Blox Fruits and other Roblox games. Our service includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Item value calculations based on community data</li>
            <li>Trading guides and tips</li>
            <li>Game-related news and updates</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Disclaimer</h2>
          <p className="mb-4">
            <strong>Important:</strong> Roblox Trade Hub is an independent, fan-made website and is NOT affiliated with, endorsed by, or sponsored by Roblox Corporation or any game developers.
          </p>
          <p className="mb-4">
            All game-related content, names, and trademarks are the property of their respective owners. "Roblox" is a trademark of Roblox Corporation. "Blox Fruits" is developed by Gamer Robot Inc.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Accuracy of Information</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date trading values, we cannot guarantee the accuracy of all information. Item values may fluctuate based on market conditions, game updates, and community preferences.
          </p>
          <p className="mb-4">
            Users should use our calculator as a reference tool only. We are not responsible for any losses incurred from trades made based on our information.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">5. User Conduct</h2>
          <p className="mb-4">When using our website, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the service for lawful purposes only</li>
            <li>Not attempt to disrupt or interfere with the website's functionality</li>
            <li>Not scrape, copy, or redistribute our content without permission</li>
            <li>Not use automated tools to access the website excessively</li>
          </ul>
          <p className="mb-4">
            <strong>No Real Money Trading:</strong> You agree not to use our service to facilitate the buying, selling, or trading of Roblox accounts or in-game items for real-world currency. We strictly prohibit any form of Real Money Trading (RMT).
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Intellectual Property</h2>
          <p className="mb-4">
            The original content, features, and functionality of this website are owned by Roblox Trade Hub and are protected by intellectual property laws. This does not include game assets which belong to their respective owners.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Third-Party Content</h2>
          <p className="mb-4">
            Our website may display advertisements from third parties (Google AdSense). We are not responsible for the content of these advertisements or any linked websites.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Roblox Trade Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
          </p>
          <p className="mb-4">
            We provide this service "as is" without any warranties, express or implied.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">10. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever, including breach of these Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">11. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of the Republic of Korea, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in South Korea.
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
