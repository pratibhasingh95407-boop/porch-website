import React from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Globe,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Back Button */}
      <div className="px-6 pt-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur text-sm">
            <ShieldCheck size={16} />
            User Privacy & Security
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-green-100 max-w-3xl mx-auto">
            Urbonix values your privacy and is committed to protecting
            your personal information through secure and transparent practices.
          </p>

          <p className="mt-6 text-green-200 text-sm">
            Last Updated: May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <Database className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Information We Collect
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              We may collect personal information including your name,
              phone number, email address, delivery location,
              transaction details, and account-related information
              when you access or use the Urbonix platform and services.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <Globe className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How We Use Information
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              Information collected is used to provide services,
              process transactions, improve platform functionality,
              personalize user experiences, communicate updates,
              and maintain platform reliability and security.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <Lock className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Data Security
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              Urbonix implements appropriate technical and
              organizational security measures to protect user
              information against unauthorized access, misuse,
              disclosure, or data loss.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <ShieldCheck className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Third-Party Services
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              We may work with trusted third-party providers for
              payment processing, analytics, logistics, customer
              support, and other operational services necessary
              to improve the Urbonix ecosystem.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <Mail className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Us
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              If you have questions, concerns, or requests related
              to privacy or data handling practices, you may contact us at:
            </p>

            <div className="mt-5 inline-flex items-center gap-3 bg-green-50 border border-green-100 px-5 py-3 rounded-xl">
              <Mail className="text-green-700" size={18} />

              <span className="text-green-800 font-medium">
                info@urbonix.co.in
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-700 to-green-900 rounded-3xl p-10 text-center text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Secure. Transparent. Trusted.
          </h2>

          <p className="mt-5 text-green-100 max-w-3xl mx-auto leading-8">
            Urbonix is committed to maintaining responsible data
            practices while building smarter and safer digital experiences.
          </p>

          <button className="mt-8 bg-white text-green-800 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Explore Urbonix
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center text-sm">
        <p>
          © 2026 Urbonix. All rights reserved.
        </p>
      </footer>
    </div>
  );
}