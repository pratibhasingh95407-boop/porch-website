import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-800">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-500">
          Last Updated: May 2026
        </p>

        <div className="mt-12 space-y-12 text-gray-700 leading-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Information We Collect
            </h2>

            <p className="mt-4">
              We may collect personal information including name,
              phone number, email address, delivery address, and
              payment details when users access our platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              How We Use Information
            </h2>

            <p className="mt-4">
              Information collected is used to provide services,
              process orders, improve user experience, and maintain
              platform security.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Data Security
            </h2>

            <p className="mt-4">
              We implement appropriate security measures to protect
              user information against unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Third-Party Services
            </h2>

            <p className="mt-4">
              We may use trusted third-party providers for payment
              processing, analytics, and service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Contact Us
            </h2>

            <p className="mt-4">
              For any privacy-related concerns, contact us at:
              info@urbonix.co.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}