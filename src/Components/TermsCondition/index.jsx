import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container-custom  px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Terms & Conditions
      </h1>
      <p className="text-gray-500 text-center mb-12">Last Updated: 24.03.2025</p>

      <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-medium">Zan Limited</span>. By using our website and services, you agree to these terms.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. User Responsibilities</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          You must be at least <span className="font-medium">18 years old</span> to use our platform. You agree not to misuse our services.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          All content on this site, including logos and text, is owned by <span className="font-medium">Zan Limited</span> and protected under copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We are not responsible for any indirect or incidental damages arising from your use of our services.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Changes to Terms</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We may update these Terms & Conditions. Please check this page periodically for updates.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions, contact us at:  
          <br />
          📧 <a href="mailto:support@zan.com" className="text-blue-500 font-medium">support@yourcompany.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
