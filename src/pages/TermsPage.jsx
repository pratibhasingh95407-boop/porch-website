import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-800">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-gray-500">
          Last Updated: May 2026
        </p>

        <div className="mt-12 space-y-12 text-gray-700 leading-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Acceptance of Terms
            </h2>

            <p className="mt-4">
              By accessing and using Urbonix services, you agree to
              comply with these terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              User Responsibilities
            </h2>

            <p className="mt-4">
              Users are responsible for maintaining accurate account
              information and ensuring lawful use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Payments & Refunds
            </h2>

            <p className="mt-4">
              Payments processed through the platform are subject to
              applicable pricing and refund policies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Limitation of Liability
            </h2>

            <p className="mt-4">
              Urbonix shall not be liable for indirect damages,
              service interruptions, or losses arising from platform
              usage.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Changes to Terms
            </h2>

            <p className="mt-4">
              We reserve the right to update or modify these terms at
              any time without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}