import React from "react";
import {
  ArrowLeft,
  Leaf,
  Users,
  Truck,
  HeartHandshake,
  Store,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PartnerPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full backdrop-blur">
            <Users size={18} />
            Partnership Ecosystem
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Partner With Urbonix
          </h1>

          <p className="mt-8 text-xl leading-9 text-green-100 max-w-4xl mx-auto">
            Join our growing ecosystem of nurseries, gardening experts,
            wellness providers, and local businesses building smarter
            sustainable lifestyle experiences together.
          </p>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Nursery Partners
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Gardening Experts
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Wellness Vendors
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Local Businesses
            </div>
          </div>
        </div>
      </section>

  

      {/* Partnership Types */}
      <section className="py-24 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Partnership Opportunities
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Urbonix enables local businesses and service providers
              to grow digitally through our expanding ecosystem.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Nursery Partners",
                desc: "Sell plants, pots, décor, and gardening products through the Urbonix platform.",
                icon: <Leaf className="text-green-700" size={32} />,
              },
              {
                title: "Gardening Experts",
                desc: "Offer maintenance, landscaping, and professional gardening services.",
                icon: <Users className="text-green-700" size={32} />,
              },
              {
                title: "Wellness Vendors",
                desc: "Provide healthy beverages, subscriptions, and wellness products.",
                icon: <HeartHandshake className="text-green-700" size={32} />,
              },
              {
                title: "Local Businesses",
                desc: "Expand your digital reach and connect with nearby customers.",
                icon: <Store className="text-green-700" size={32} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[32px] shadow-xl border border-green-100 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-green-800">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Why Partner With Us?
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Urbonix helps partners scale digitally while reaching
              more customers through smart technology and local commerce.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Digital Growth",
                icon: <TrendingUp className="text-green-700" size={30} />,
              },
              {
                title: "Local Visibility",
                icon: <Globe className="text-green-700" size={30} />,
              },
              {
                title: "Reliable Logistics",
                icon: <Truck className="text-green-700" size={30} />,
              },
              {
                title: "Secure Platform",
                icon: <ShieldCheck className="text-green-700" size={30} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-10 rounded-[32px] border border-green-100 shadow-lg text-center hover:-translate-y-2 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-md">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-green-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Simple Partnership Process
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Getting started with Urbonix is fast, simple, and designed
            to help your business grow digitally.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your partnership request and business details.",
              },
              {
                step: "02",
                title: "Verification",
                desc: "Our team reviews and verifies your business profile.",
              },
              {
                step: "03",
                title: "Launch",
                desc: "Start selling or offering services through Urbonix.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[32px] shadow-lg border border-green-100"
              >

                <div className="text-5xl font-bold text-green-700">
                  {item.step}
                </div>

                <h3 className="mt-6 text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-700 to-green-900 rounded-[40px] p-16 text-center text-white shadow-2xl">

          <h2 className="text-5xl font-bold">
            Grow With The Urbonix Ecosystem
          </h2>

          <p className="mt-8 text-lg text-green-100 max-w-3xl mx-auto leading-8">
            Partner with Urbonix and connect your business with
            modern digital commerce, sustainability, and wellness-focused communities.
          </p>

          <button className="mt-10 bg-white text-green-800 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Contact Partnership Team
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10 text-center">
        <p>
          © 2026 Urbonix. All rights reserved.
        </p>
      </footer>
    </div>
  );
}