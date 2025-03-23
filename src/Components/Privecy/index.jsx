import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-10">Last Updated:24.03.2025</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, browsing behavior.</li>
            <li><strong>Cookies & Tracking:</strong> Used to enhance user experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your data to operate, improve our services, respond to inquiries, send updates, and analyze website traffic.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Data Protection & Security</h2>
          <p className="text-gray-700">
            We implement security measures to protect your data, but no method is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Sharing of Information</h2>
          <p className="text-gray-700">
            We do not sell your data but may share it with service providers for business operations and legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Your Rights & Choices</h2>
          <p className="text-gray-700">
            You can access, update, or delete your data and opt-out of marketing communications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Third-Party Links</h2>
          <p className="text-gray-700">
            We are not responsible for third-party websites linked from our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this policy, and the latest version will always be available on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
          <p className="text-gray-700 mb-2">For any questions, contact us at:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
          <a href="mailto:support@zan.com" className="text-blue-500 font-medium">support@yourcompany.com</a>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
